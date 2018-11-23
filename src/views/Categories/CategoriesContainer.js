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
      questionNb: storage.get('questionNb') || 0,
      score: storage.get('score') || 0,
      attempt: storage.get('attempt') || 3,
      inputValue: '',
      isFocus: false,
      isMobile: false,
      isWrong: false,
      menuOpen: false,
      windowWidth: window.innerWidth,
      isClicked: storage.get('click') || false
    }
    
    this.animWrong = React.createRef();
    this.eventClick = this.eventClick.bind(this);
  }

  async componentDidMount() {
    const data = await api.getCategories();
    this.setState({categories: data })
    
    this.displayMobile();
    window.addEventListener('resize', this.displayMobile);
  }

  displayMobile = () => {
    this.state.windowWidth > 767 ? this.setState({isMobile: false, windowWidth: window.innerWidth}) : this.setState({isMobile: true, windowWidth: window.innerWidth})
  }
  

  // On Click Categories
  async eventClick(element) {
    
    element = element.target;
    const getQuestions = await api.getCategoryById(element.classList[0]);

    this.setState({
      click: true,
      questions: getQuestions,
      isClicked: true
    })

    // Store data in local storage

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

  // Change state to input value and listen to focus

  handleChange = (event) => {
    if (this.state.inputValue === ""){
      this.setState({isFocus : false})
    } else {
      this.setState({isFocus : true})
    }

    this.setState({inputValue: event.target.value})
  }

  // Check if the answer is valid

  verifyAnswer = () => {
    const questions = storage.get('category');
    let answer = questions.clues[this.state.questionNb].answer;

    answer = answer.replace(/[^a-zA-Z0-9 ]/g, "");

    this.state.inputValue === answer && this.state.inputValue !== "" ? this.correct() : this.wrong();
    this.setState({isFocus: false});
  }

  // If correct update state
  correct = () => {
    this.setState(prevState => ({
      score: prevState.score + 1,
      questionNb: prevState.questionNb + 1,
      inputValue: ''
    }), this.storeCorrect)
  }

  // If wrong update state and add anim
  wrong = () => {
    if (this.state.attempt > 0 && this.state.inputValue !== '') {
      this.setState(prevState => ({
        attempt: prevState.attempt - 1,
        inputValue: '',
        isWrong: true
      }), this.storeWrong)
        
      if(this.state.attempt >= 1){
        this.animWrong.current.classList.add('shake');

        setTimeout(() => {
          this.animWrong.current.classList.remove('shake')
        }, 500);
      }
    }
  }

  // Store data in local storage if correct
  storeCorrect = () => {
    storage.set('score', this.state.score);
    storage.set('questionNb', this.state.questionNb);
  }

  // Store data in local storage if wrong
  storeWrong = () => {
    storage.set('attempt', this.state.attempt);
  }
   
  // Restart state from beginning and store it in localStorage
  restartGame = () => {
    this.setState({
      attempt: 3,
      score: 0,
      questionNb: 0,
    })

    this.storeCorrect();
    this.storeWrong();
  }
  
  // Show and Hide menu in Mobile
  clickMenu = (element) => {
    let parentElement = element.target.parentElement;
    if(!this.state.menuOpen){
      parentElement.classList.add('open');
      this.setState({menuOpen: true})
    } else {
      parentElement.classList.remove('open');
      this.setState({menuOpen: false})
    }
  }

  // If user press ('enter') , verify value
  keyEnter = (el) => {
    if(this.state.inputValue !== '' && el.keyCode === 13){
      this.verifyAnswer();
    }
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
      keyEnter={this.keyEnter}
      animWrong={this.animWrong}
      />
    }
    
    
    return (
      <Container>
        <Categories 
        isClicked={this.state.click} 
        categories={this.state.categories} 
        eventClick={this.eventClick} 
        isMobile={this.state.isMobile}
        clickMobile={this.clickMenu}
        />
        {page}
      </Container>
    )
  }
}

export default CategoriesContainer;