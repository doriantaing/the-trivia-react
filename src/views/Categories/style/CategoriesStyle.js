import styled from 'styled-components';

export const Container = styled.section `
    width: 300px;
    height: 100%;
`

export const CategoriesTitle = styled.h4 `
  color: #f9aa33;
  font-size: 24px;
  padding: 20px 0 40px;
  margin: 0;
  text-align: center;
  @media (max-width: 768px){
     color: #fff;
  }

`

export const CategoriesContainer = styled.section `
  display: flex;
  align-items: flex-start;
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
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 18px;
  margin-top: 0;
  cursor: pointer;
  transition: 0.5s;
  text-transform: uppercase;
  color: #f9aa33;
  position: relative;
  transform-origin: left;
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 10px;
    background: rgba(239,45,86,0.3);
    transition: 0.5s;
  }
  &.active{
    color: #EF2D56;
    transform: scale(1.2);
    &::after{
      width: 100%;
    }
  }
  
  &:hover{
      // color: #EF2D56;
      &::after{
        width: 100%;
      }
  }
 
  @media (max-width: 768px){
    color: #fff;
    font-size: 15px;
    margin-bottom: 25px;
  }
`


export const CategoriesContent = styled.div `
  background: #f4f5f9;
  height: 100%;
  color: #fff;
  transition: 0.5s;
  @media (max-width: 768px){
    width: 100%;
    background: #f9aa33;
  }

`
