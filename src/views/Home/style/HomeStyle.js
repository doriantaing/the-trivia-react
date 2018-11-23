import styled from 'styled-components';



export const HomeContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;  
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px){
    height: 100vh;
  }
`

export const HomeTitle = styled.h1`
  font-size: 34px;
  color: #575757;
  opacity: 0.5;
`