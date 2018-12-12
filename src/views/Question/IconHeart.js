import React from 'react';
import {IconContainer, Icon} from './style/QuestionStyle';
import lose from './../lose.svg';
import heart from './../heart.svg';


const IconHeart = ({attempt}) => {
  switch(attempt){
    case 3:
      return(
        <IconContainer>
          <Icon src={heart} alt=""/>
          <Icon src={heart} alt=""/>
          <Icon src={heart} alt=""/>
        </IconContainer>
      )    
    case 2:
      return(
        <IconContainer>
          <Icon src={lose} alt=""/>
          <Icon src={heart} alt=""/>
          <Icon src={heart} alt=""/>
        </IconContainer>
      )
    case 1:
      return(
        <IconContainer>
          <Icon src={lose} alt=""/>
          <Icon src={lose} alt=""/>
          <Icon src={heart} alt=""/>
        </IconContainer>
      )
    default: 
    console.log('You Broke my fucking game')
  } 
}



export default IconHeart