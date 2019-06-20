import React from 'react';
import {HomeContainer, HomeContent , HomeTitle} from './style/HomeStyle';
import CategoriesContainer from '../Categories/CategoriesContainer';
import {Spring} from 'react-spring'

const Home = ({data}) => (
    <HomeContainer>
      <Spring
        from={{ transform: 'translateX(-1000px)'}}
        to={{ transform: 'translateX(0)' , height: '100%'}}
      >
        {props => (
          <div style={props}> 
            <CategoriesContainer data={data}/>
          </div>
        )} 
      </Spring>

      <Spring
        from={{ transform: 'translateX(1000px)'}}
        to={{ transform: 'translateX(0)' , height: '100%' , width: '100%'}}
      >
        {props => (
          <div style={props}>
            <HomeContent>
              <HomeTitle>Select a Category</HomeTitle>
            </HomeContent>
          </div>
        )}
      </Spring>

    </HomeContainer>
)

export default Home;