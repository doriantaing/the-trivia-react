import React from 'react';
import Categories from './Categories';
import api from '../../helpers/api';
import styled from 'styled-components';
import HomeContainer from '../Home/HomeContainer';  
import QuestionContainer from '../Question/QuestionContainer';  


const Container = styled.section `
  display: grid;
  grid-template-columns: 260px 1fr;
`

class CategoriesContainer extends React.Component {
  constructor(){
    super();

    this.state = {
      categories: null,
      questions: null,
      click: false,
    }

    this.eventClick = this.eventClick.bind(this);
  }

  async componentDidMount() {
    const fetch = await api.getCategories();
    this.setState({categories: fetch})
    this.eventClick = this
      .eventClick
      .bind(this);
  }

  async eventClick(element) {
    element = element.target;
    const getQuestions = await api.getCategoryById(element.classList[0]);
    this.setState({questions: getQuestions, click: true})
  }

  render() {
    let page;

    if(!this.state.click){
      page = <HomeContainer/>
    } else {
      page = <QuestionContainer/>
    }
    return (
      <Container>
        <Categories categories={this.state.categories} eventClick={this.eventClick}/>
        {page}
      </Container>
    )
  }
}

export default CategoriesContainer;