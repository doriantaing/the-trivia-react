import React from 'react';
import Categories from './Categories';
import storage from '../../helpers/Storage';
import MobileContainer from '../Mobile/MobileContainer';
import {Container} from './style/CategoriesStyle';
import MyContext from '../../store/TriviaContext'


class CategoriesContainer extends React.Component {

   state = {
      categories: null,
      click: storage.get('click') || false,
      cat_questions: storage.get('category') || undefined,
      lastClicked: '',
      questionNb: storage.get('questionNb') || 0,
      score: storage.get('score') || 0,
      attempt: storage.get('attempt') || 3,
      inputValue: '',
      isFocus: false,
      isMobile: false,
      isWrong: false,
      isLoading: false, 
      menuOpen: false,
      windowWidth: window.innerWidth,
      isClicked: storage.get('click') || false,
   }


  async componentDidMount() {
    // handle mobile display
    this.displayMobile();
    window.addEventListener('resize', this.displayMobile);
  }
  
  displayMobile = () => {
    this.state.windowWidth >= 768 ? this.setState({isMobile: false, windowWidth: window.innerWidth}) : this.setState({isMobile: true, windowWidth: window.innerWidth})
  }

  // Check if the answer is valid


  render() {
    let page;
    const {cat_questions} = this.state;

      // Display on Desktop
      if (!this.state.isMobile){
        return (
          <Container>
            <MyContext.Consumer>
              {(context) => (
                <div>
                  <Categories
                  title='寿司ゲーム'
                  context={context}
                  />
                </div>
              )}
            </MyContext.Consumer>
          </Container>
        )
      // Display on Mobile
      } else {
        return(
          <MobileContainer
            categories={this.state.categories}
            categoriesClick={this.eventClick}
            cat_questions={cat_questions}
            isMobile={this.state.isMobile}

          />
        )
      }
  }
}

export default CategoriesContainer;