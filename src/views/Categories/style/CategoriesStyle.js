import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

export const Container = styled.section `
    width: 300px;
    height: 100%;
`

export const CategoriesTitle = styled.h4 `
  color: ${Colors.mainOrange};
  font-size: 24px;
  padding: 20px 0 40px;
  margin: 0;
  text-align: center;
  @media (max-width: 768px){
     color: ${Colors.white};
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

export const LinkCategories = styled.a `
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 18px;
  margin-top: 0;
  cursor: pointer;
  transition: 0.5s;
  text-transform: uppercase;
  color: ${Colors.orangeOpacity};
  position: relative;
  transform-origin: left;
  &::before{
  content: attr(data-letters);
  position: absolute;
  z-index: 2;
  overflow: hidden;
  color: ${Colors.mainOrange};
  white-space: nowrap;
  width: 0;
  transition: width 0.4s 0.3s;
  }
  &::after{
    content: '';
    position: absolute;
    height: 16px;
    width: 100%;
    top: 50%;
    margin-top: -8px;
    right: 0;
    background: ${Colors.greyBackground};
    transform: translate3d(-100%,0,0);
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  }
  &.active{
    color: #E39B2F;
    transform: scale(1.2);
    &::before{
      width: 100%;
    }
    &::after{
      transform: translate3d(100%,0,0);
    }
  }
  
  &:hover{
      color: ${Colors.mainOrange};
  }
 
  @media (max-width: 768px){
    color: ${Colors.white};
    font-size: 15px;
    margin-bottom: 25px;
  }
`


export const CategoriesContent = styled.div `
  background: ${Colors.greyBackground};
  height: 100%;
  color: ${Colors.white};
  transition: 0.5s;
  @media (max-width: 768px){
    width: 100%;
    background: ${Colors.mainOrange};
  }

`
