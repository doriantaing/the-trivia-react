import styled from 'styled-components';
import patern from './../../patern.svg';


export const HomeContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;  
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${patern}) no-repeat center center;
  background-size: cover;
  @media (max-width: 767px){
    height: 100vh;
    width: 100vw;
  }
`

export const HomeTitle = styled.h1`
  font-size: 34px;
  color: #FFFFFF;
`