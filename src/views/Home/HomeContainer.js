import React, {Component} from 'react';
import Home from './Home';
import api from '../../helpers/api';

class HomeContainer extends Component {
  state = {
      categories: null,
  }
  async componentDidMount() {
    const fetch = await api.getCategories();
    this.setState ({
      categories: fetch,
    })
    console.log(this.state.categories);
  }
  render() {
    return (<Home categories={this.state.categories}/>);
  }
}

export default HomeContainer;