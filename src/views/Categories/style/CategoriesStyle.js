import styled from 'styled-components';

export const Container = styled.section `
  display: grid;
  grid-template-columns: 260px 1fr;
  @media (max-width: 767px){
    grid-template-columns: 1fr;
  }
`

export const CategoriesTitle = styled.h4 `
  color: #f9aa33;
  font-size: 24px;
  padding: 20px 0 40px;
  margin: 0;
  @media (max-width: 767px){
    padding: 14px 0 18px 16px;
    text-align: left;
    font-size: 20px;
  }
`

export const CategoriesContent = styled.div `
  background: #344955;
  height: 100vh;
  color: #fff;
  width: 260px;
  @media (max-width: 767px){
    height: auto;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`
export const CategoriesContainer = styled.section `
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
  @media (max-width: 767px){
    display: none;
  }
`

export const LinkCategories = styled.p `
   color: #FFF;
   font-size: 14px;
   text-decoration: none;
   margin-bottom: 18px;
   margin-top: 0;
   cursor: pointer;
  transition: 0.5s;
   &:hover{
     color: #f9aa33;
   }
   &.active{
     color: #f9aa33;
     font-size: 17px;
   }
`
