import React from 'react';
import Categories from './Categories';
import api from '../../helpers/api';
import storage from '../../helpers/storage';
import Home from '../Home/Home';  
import Question from '../Question/Question';
import {Container} from './style/CategoriesStyle';



class CategoriesContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      categories: null,
      click: storage.get('click') || false,
      questions: storage.get('category') || undefined,
      lastClicked: '',
      question: null,
      questionNb: storage.get('questionNb') || 0,
      score: storage.get('score') || 0,
      attempt: storage.get('attempt') || 3,
      inputValue: '',
      isFocus: false,
      isMobile: false,
      isWrong: false,
      windowWidth: window.innerWidth,
      isClicked: storage.get('click') || false
    }

    this.eventClick = this.eventClick.bind(this);
  }

  async componentDidMount() {
    const data = await api.getCategories();
    this.setState({categories: data })
    window.addEventListener('resize', this.displayMobile);


    if (this.state.categoryClicked){
      console.log(this.state.categoryClicked);
    }

  }

  displayMobile = () => {
    this.state.windowWidth >= 768 ? this.setState({isMobile: false, windowWidth: window.innerWidth}) : this.setState({isMobile: true, windowWidth: window.innerWidth})
  }
  
  async eventClick(element) {
    
    element = element.target;
    const getQuestions = await api.getCategoryById(element.classList[0]);

    this.setState({
      click: true,
      questions: getQuestions,
      isClicked: true
    })
    
    await storage.set('category', getQuestions);
    await storage.set('click', this.state.click);
    await storage.set('isClicked', this.state.isClicked);


    // Make sure that only one category can be selected
    if(this.state.categoryClicked !== element){
      this.setState({
        lastClicked: this.state.categoryClicked || '',
        categoryClicked: element,
        attempt: 3,
        score: 0,
        questionNb: 0,
      })

      this.state.categoryClicked.classList.add('active');
    
      if(this.state.lastClicked){
        this.state.lastClicked.classList.remove('active');
        this.setState({
          isClicked: false
        })
      }
    }
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})

    this.setState({isFocus : true})

    if (this.state.inputValue === ""){
      this.setState({isFocus : false})
    }
   
  }

  verifyAnswer = (element) => {
    const questions = storage.get('category');
    let answer = questions.clues[this.state.questionNb].answer;

    answer = answer.replace(/[^a-zA-Z0-9 ]/g, "");

    this.state.inputValue === answer && this.state.inputValue !== "" ? this.correct() : this.wrong(element.target);
    this.setState({isFocus: false});
  }

  correct = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
      questionNb: prevState.questionNb + 1,
      inputValue: ''
    }), this.storeCorrect)
  }

  wrong = (el) => {
    if (this.state.attempt > 0 && this.state.inputValue !== '') {
      this.setState(prevState => ({
        attempt: prevState.attempt - 1,
        inputValue: '',
        isWrong: true
      }), this.storeWrong)
        
      if(this.state.attempt >= 1){
        let parentElement = el.parentElement.parentElement;
        parentElement.classList.add('shake');
        setTimeout( function(){
          parentElement.classList.remove('shake');
        }, 500)
      }
    }
  }

  storeCorrect = () => {
    storage.set('score', this.state.score);
    storage.set('questionNb', this.state.questionNb);
  }

  storeWrong = () => {
    storage.set('attempt', this.state.attempt);
  }
   
  restartGame = () => {
    this.setState(({
      attempt: 3,
      score: 0,
      questionNb: 0,
    }), this.storeWrong)
  }

  render() {
    let page;

    if(!this.state.click){
      page = <Home/>
    } else {
      const {questions , questionNb , score , attempt , inputValue} = this.state;
      page = 
      <Question
      questions={questions}
      question={questions.clues}
      questionNb={questionNb}
      score={score}
      attempt={attempt}
      eventChange={this.handleChange}
      eventClick={this.verifyAnswer}
      restartGame={this.restartGame}
      inputValue={inputValue}
      isFocus={this.state.isFocus}
      handleBlur={this.handleBlur}
      />
    }
    
    
    return (
      <Container>
        <Categories isClicked={this.state.click} categories={this.state.categories} eventClick={this.eventClick} isMobile={this.state.isMobile}/>
        {page}
      </Container>
    )
  }
}

export default CategoriesContainer;