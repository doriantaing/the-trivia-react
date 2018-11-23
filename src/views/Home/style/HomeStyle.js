import styled from 'styled-components';



export const HomeContent = styled.div`
  position: relative;
  height: 100%;
  @media (max-width: 767px){
    height: 100vh;
  }
`

export const HomeTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  font-size: 34px;
  color: #575757;
  opacity: 0.5;
`