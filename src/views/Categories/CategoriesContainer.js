import React from 'react';
import Categories from './Categories';
import api from '../../helpers/api';
import storage from '../../helpers/storage';
import Home from '../Home/Home';  
import Question from '../Question/Question';
import {Container, LoaderContainer , LoaderText} from './style/CategoriesStyle';
import Loaderannimation from '@haiku/vicorch-loaderannimation/react';



class CategoriesContainer extends React.Component {

  constructor(){
    super();

    this.state = {
      categories: null,
      click: storage.get('click') || false,
      cat_questions: storage.get('category') || undefined,
      lastClicked: '',
      questionNb: storage.get('questionNb') || 0,
      score: storage.get('score') || 0,
      attempt: storage.get('attempt') || 3,
      inputValue: '',
      isFocus: false,
      isMobile: false,
      isWrong: false,
      isLoading: false, 
      menuOpen: false,
      windowWidth: window.innerWidth,
      isClicked: storage.get('click') || false,
      items: []
    }
    
    this.animWrong = React.createRef();
    this.eventClick = this.eventClick.bind(this);
  }

  async componentDidMount() {
    this.setState({isLoading: true})
    const data = await api.getCategories();
    this.setState({categories: data , isLoading: false});
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
      cat_questions: getQuestions,
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
    let answer = questions.questions[this.state.questionNb].answer;
    
    if(this.state.questionNb <= this.state.cat_questions.questions.length - 1)
    this.state.inputValue === answer && this.state.inputValue !== "" ? this.correct() : this.wrong();
    this.setState({isFocus: false});
  }

  // If correct update state
  correct = () => {
    if(this.state.questionNb <= 10){
      this.setState(prevState => ({
        score: prevState.score + 1,
        questionNb: prevState.questionNb + 1,
        inputValue: ''
      }), this.storeLocal)
    }
  }

  // If wrong update state and add anim
  wrong = () => {
    console.log('hello');
    if (this.state.attempt > 0 && this.state.inputValue !== '') {
      this.setState(prevState => ({
        attempt: prevState.attempt - 1,
        inputValue: '',
        isWrong: true
      }), this.storeLocal)
        
      if(this.state.attempt >= 1){
        this.animWrong.current.classList.add('shake');
        console.log(this.animWrong.current);
        setTimeout(() => {
          this.animWrong.current.classList.remove('shake')
        }, 500);
      }
    }
  }

  // Store data in local storage 
  storeLocal = () => {
    storage.set('score', this.state.score);
    storage.set('questionNb', this.state.questionNb);
    storage.set('attempt', this.state.attempt);
  }

   
  // Restart state from beginning and store it in localStorage
  restartGame = () => {
    this.setState({
      score: 0,
      attempt: 3,
      questionNb: 0,  
    });
    
    this.storeLocal();  
    storage.set('questionNb', 0);
    storage.set('score', 0);
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
      const {cat_questions , questionNb , score , attempt , inputValue} = this.state;
      page = 
      <Question
      cat_questions={cat_questions}
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

    if(this.state.isLoading){
      return(
        <LoaderContainer>
        <Loaderannimation className='loader' loop={true} />
        <LoaderText>Loading ...</LoaderText>
        </LoaderContainer>
        
      )
    } else {
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
}

export default CategoriesContainer;