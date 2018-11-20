import React, {Component} from 'react';
import storage from '../../helpers/storage';
import Question from '../Question/Question';

class QuestionContainer extends Component {
  constructor() {
    super();
    this.state = {
      question: null,
      questionNb: storage.get('questionNb') || 0,
      score: storage.get('score') || 0,
      attempt: storage.get('attempt') || 3,
      inputValue: ''
    }

    this.handleChange = this
      .handleChange
      .bind(this);
    this.verifyAnswer = this
      .verifyAnswer
      .bind(this);
    this.storeCorrect = this
      .storeCorrect
      .bind(this);
    this.storeWrong = this
      .storeWrong
      .bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }
  verifyAnswer() {
    const questions = storage.get('category');
    let answer = questions.clues[this.state.questionNb].answer;

    answer = answer.replace(/[^a-zA-Z0-9 ]/g, "");

    this.state.inputValue === answer && this.state.inputValue !== ""
      ? this.correct()
      : this.wrong();
  }
  correct() {
    this.setState(prevState => ({
      score: prevState.score + 1,
      questionNb: prevState.questionNb + 1,
      inputValue: ''
    }), this.storeCorrect)
  }
  wrong() {
    if (this.state.attempt > 0 && this.state.inputValue !== '') {
      this.setState(prevState => ({
        attempt: prevState.attempt - 1
      }), this.storeWrong)
    }
  }
  storeCorrect() {
    storage.set('score', this.state.score);
    storage.set('questionNb', this.state.questionNb);
  }
  storeWrong() {
    storage.set('attempt', this.state.attempt);
  }

  focusInput(element) {
    if(this.state.inputValue !== ''){
      element.target.classList.add('focus');
    } else {
      element.target.classList.remove('focus');
    }
  }

  render() {
    const {clues} = this.props.questions
    const {questionNb , score , attempt} = this.state

    return (
    <Question 
    questionNb={questionNb}
    score={score}
    attempt={attempt}
    question={clues} 
    eventChange={this.handleChange}
    eventClick={this.verifyAnswer}
    eventFocus={this.focusInput}
    />);
  }
}

export default QuestionContainer;