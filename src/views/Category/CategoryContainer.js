import React, {Component} from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: null,
    title: null,
    question: null,
    questionNb: 0,
    score: 0
  }

  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({category: data, title: data.title , question: data.clues})
  }
  render() {
    return (<Category
      questionNb={this.state.questionNb}
      title={this.state.title}
      score={this.state.score}
      question={this.state.question}
      />);
  }
}

export default CategoryContainer;