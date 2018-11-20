import React from 'react';
import Categories from './Categories';
import api from '../../helpers/api';
import storage from '../../helpers/storage';
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
      click: false,
      questions: null,
      categoryClicked: '',
      lastClicked: '',
    }

    this.eventClick = this.eventClick.bind(this);
  }

  async componentDidMount() {
    const data = await api.getCategories();
    this.setState({categories: data})
    this.eventClick = this
      .eventClick
      .bind(this);
  }

  async eventClick(element) {
    element = element.target;
    const getQuestions = await api.getCategoryById(element.classList[0]);

    this.setState({
      click: true,
      questions: getQuestions
    })
    
    await storage.set('category', getQuestions);
    if(this.state.categoryClicked !== element){
      this.setState({
        lastClicked: this.state.categoryClicked || '',
        categoryClicked: element,
      })
      
      this.state.categoryClicked.classList.add('active');
  
      if(this.state.lastClicked){
        this.state.lastClicked.classList.remove('active');
      }
    }
  }

  render() {
    let page;

    if(!this.state.click){
      page = <HomeContainer/>
    } else {
      page = <QuestionContainer questions={this.state.questions}/>
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