import React from 'react';
import Categories from './Categories';
import {Container} from './style/CategoriesStyle';
import MyContext from '../../store/TriviaContext'


class CategoriesContainer extends React.Component {


  render() {
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
  }
}

export default CategoriesContainer;