import styled, {createGlobalStyle} from 'styled-components';
import patern from './../../img/patern.svg';


export const GlobalStyle = createGlobalStyle `
  p{
    margin: 0;
  }
`

export const Section = styled.div `
  display: flex;
  justify-content: center; 
  align-items: center; 
  background: url(${patern}) no-repeat center center;
  background-size: cover;
`

export const SectionContainer = styled.section `
  position: relative;
  background: #fff;
  width: auto;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-width: 436px;
  min-height: 175px;
  padding: 35px 0 0;
  &.shake{
    animation: shake 0.2s  linear alternate infinite;
    box-shadow: -5px 5px 5px 10px rgba(255, 0, 0, 0.2);
  }
  @keyframes shake{
    0%{
      transform: rotate(-10deg);
    }
    50%{
      transform: rotate(10deg);
    }
  }
`

export const QuestionText = styled.p `
  color: #575757;
  font-size: 18px;
  margin: 22px 0;
  max-width: 400px;
`

export const QuestionContent = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`

export const QuestionButton = styled.button `
  position: ${props => props.restartGame ? 'static' : 'absolute'};
  bottom: -45px;
  right: 0;
  border-radius: 4px;
  background: ${props => props.restartGame ? '#f9aa33' : '#344955'};
  opacity: ${props => props.restartGame ? '1' : '0.1'};
  color: #FFF;
  font-size: 13px;
  width: 85px;
  padding: 8px 0;
  border: none;
  cursor: pointer;
  transition: .2s;
  outline: none;
`


export const QuestionInput = styled.input `
  border: 1px solid #979797;
  width: 100%;
  border-radius: 4px;
  height: 32px;
  font-size: 14px;
  padding-left: 8px;
  transition: .2s ease-out;
  margin-bottom: 21px;
  outline: none;
  &:focus{
    &::placeholder{
      opacity: 0;
    }
  }
  &.focus{
    box-shadow: 0 0 7px 1px #f9aa33;
    border-color: #f9aa33;
    &~button{
      opacity: 1;
    }
  }
`

export const TopRight = styled.div `
  position: absolute;
  right: 10px;
  top: 10px;
`

export const IconContainer = styled.div`
   display: flex;
`

export const Icon = styled.img`
   fill: ${ props => props.lost ? '#f4f5f9' : '#f9aa33'};
   width: 26px;
   height: 26px;
   margin-right: 8px;
`