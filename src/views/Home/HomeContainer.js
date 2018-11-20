import React, {Component} from 'react';
import Home from './Home';
import api from '../../helpers/api';
import styled from 'styled-components';

class HomeContainer extends Component {
  constructor() {
    super();

    this.state = {
      categories: null
    }
  }

  async componentDidMount() {
    const fetch = await api.getCategories();
    this.setState({categories: fetch})
  }

  render() {
    return (
        <Home categories={this.state.categories}/>
    );
  }
}

export default HomeContainer;