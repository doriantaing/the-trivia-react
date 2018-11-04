import React, {Component} from 'react';
import api from '../../helpers/api';
import Category from './Category';
import storage from '../../helpers/storage';

class CategoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      category: null,
      title: null,
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
      this.storeCorrect = this.storeCorrect.bind(this);
      this.storeWrong = this.storeWrong.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  verifyAnswer(value) {
    const questions = storage.get('questions');
    let answer = questions[this.state.questionNb].answer;
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

  storeCorrect () {
    storage.set('score', this.state.score);
    storage.set('questionNb', this.state.questionNb);
  }

  wrong() {
    if(this.state.attempt > 0 && this.state.inputValue !== ''){
      this.setState(prevState => ({
        attempt: prevState.attempt - 1
      }), this.storeWrong)
    }
  }


  storeWrong(){
    storage.set('attempt', this.state.attempt);
  }

  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
      title: data.title,
      question: data.clues
    })

    await storage.set('category', data.title);
    await storage.set('questions', data.clues);
  }

  render() {
    const { questionNb, title, score , attempt} = this.state
    return (
      <Category
        questionNb={questionNb}
        title={title}
        score={score}
        attempt={attempt}
        question={storage.get('questions')}
        eventChange={this.handleChange}
        eventClick={this.verifyAnswer}
      />
    );
  }
}

export default CategoryContainer;