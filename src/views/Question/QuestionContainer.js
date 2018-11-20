import React, {Component} from 'react';
import api from '../../helpers/api';
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
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }
  verifyAnswer(value) {
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
      questionNb: prevState.questionNb + 1
    }), this.storeCorrect)
  }
  storeCorrect() {
    storage.set('score', this.state.score);
    storage.set('questionNb', this.state.questionNb);
  }
  wrong() {
    if (this.state.attempt > 0 && this.state.inputValue !== '') {
      this.setState(prevState => ({
        attempt: prevState.attempt - 1
      }), this.storeWrong)
    }
  }
  storeWrong() {
    storage.set('attempt', this.state.attempt);
  }

  async componentDidMount() {
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

    />);
  }
}

export default QuestionContainer;