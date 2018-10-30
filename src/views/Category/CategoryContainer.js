import React, {Component} from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {

  state = {
    category: null,
    title: null,
    questionNb: 0,
    score: 0
  }

  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({category: data, title: data.title})
    console.log(this.state);
  }
  render() {
    return (<Category
      id={this.props.match.params.id}
      title={this.state.title}
      score={this.state.score}/>);
  }
}

export default CategoryContainer;