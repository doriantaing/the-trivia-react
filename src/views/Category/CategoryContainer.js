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
      questionNb: 0,
      score: 0,
      inputValue: ''
    }

    this.handleChange = this
      .handleChange
      .bind(this);
    this.verifyAnswer = this
      .verifyAnswer
      .bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  verifyAnswer(value) {
    const questions = storage.get('questions');
    let answer = questions[this.state.questionNb].answer;
    answer = answer.replace(/[^a-zA-Z0-9 ]/g, "");

    this.state.inputValue === answer
      ? this.correct()
      : this.wrong();
  }

  correct() {
    this.setState(prevState => {
      prevState.score++;
      prevState.questionNb++;
      storage.set('score', this.state.score);
    })
  }

  wrong() {}

  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({category: data, title: data.title, question: data.clues})

    storage.set('category', data.title);
    storage.set('questions', data.clues);
    storage.set('score', this.state.score);
  }

  render() {
    return (<Category
      questionNb={this.state.questionNb}
      title={this.state.title}
      score={storage.get('score')}
      question={storage.get('questions')}
      eventChange={this.handleChange}
      eventClick={this.verifyAnswer}/>);
  }
}

export default CategoryContainer;