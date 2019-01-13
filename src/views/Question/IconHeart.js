import React from 'react';
import {IconContainer, Icon} from './style/QuestionStyle';
import lose from './../img/lose.svg';
import heart from './../img/heart.svg';


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

    case 0:
        return(
          <IconContainer>
          <Icon src={lose} alt=""/>
          <Icon src={lose} alt=""/>
          <Icon src={lose} alt=""/>
        </IconContainer>
        )
    default: 
    console.log('You broke my fucking game')
  } 
}



export default IconHeart;