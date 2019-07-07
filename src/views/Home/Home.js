import React from 'react';
import {HomeContainer, HomeContent , HomeTitle} from './style/HomeStyle';
import {Spring} from 'react-spring'
import MyContext from '../../store/TriviaContext';
import storage from '../../helpers/Storage';
import CategoriesContainer from '../Categories/CategoriesContainer';
import Question from '../Question/Question';


const Home = () => (
    <HomeContainer>
      <Spring
        from={{ transform: 'translateX(-1000px)'}}
        to={{ transform: 'translateX(0)' , height: '100%'}}
      >
        {props => (
          <div style={props}>
            <CategoriesContainer/>
          </div>
        )}
      </Spring>

      <Spring
        from={{ transform: 'translateX(1000px)'}}
        to={{ transform: 'translateX(0)' , height: '100%' , width: '100%'}}
      >
        {props => (
          <MyContext.Consumer style={props}>
            {(context) => (
            <HomeContent>
              {context.questions || storage.get('category') ?
                  <Spring
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                  >
                        {props => (
                            <div style={props}>
                              <Question context={context}/>
                            </div>
                        )}
                  </Spring>
              :
              <HomeTitle>Select a Category</HomeTitle>
              }
            </HomeContent>
            )}
          </MyContext.Consumer>
        )}
      </Spring>

    </HomeContainer>
)

export default Home;