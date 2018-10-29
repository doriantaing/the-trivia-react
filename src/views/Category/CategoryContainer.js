import React, {Component} from 'react';
import Category from './Category';

class CategoryContainer extends Component {
  componentDidMount() {
    fetch(`http://jservice.io/api/category?id=${this.props.match.params.name}`).then(response => {
      response.json()
        .then(category => {
          console.log(category.clues[0].question);
        })
    })
  }
  render() {
    return (<Category categoryName={this.props.match.params.name}/>);
  }
}

export default CategoryContainer;