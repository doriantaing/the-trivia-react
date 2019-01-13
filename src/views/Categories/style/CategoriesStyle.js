import styled from 'styled-components';

export const Container = styled.section `
  display: grid;
  grid-template-columns: 280px 1fr;
`

export const CategoriesTitle = styled.h4 `
  color: #f9aa33;
  font-size: 24px;
  padding: 20px 0 40px;
  margin: 0;
  @media (max-width: 768px){
     color: #fff;
  }
`

export const CategoriesContainer = styled.section `
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
  transition: 0.5s;
  @media (max-width: 768px){
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 0;
  }
`

export const LinkCategories = styled.p `
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 18px;
  margin-top: 0;
  cursor: pointer;
  transition: 0.5s;
  text-transform: uppercase;
  color: #f9aa33;
  position: relative;
  &.active{
    transform: scale(1.1);
    transform-origin: left;
  }
 
  @media (max-width: 768px){
    color: #fff;
    font-size: 15px;
    margin-bottom: 25px;
  }
`


export const CategoriesContent = styled.div `
  background: #f4f5f9;
  height: 100vh;
  color: #fff;
  width: 260px;
  transition: 0.5s;
  @media (max-width: 768px){
    width: 100%;
    background: #f9aa33;
  }
`

export const LoaderContainer = styled.div `
  background: #f9aa33;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

export const LoaderText = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-size: 30px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const LoaderLogo = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg{
    width: 105px;
  }
`