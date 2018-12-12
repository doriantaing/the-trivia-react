import styled from 'styled-components';

export const Container = styled.section `
  display: grid;
  grid-template-columns: 280px 1fr;
  @media (max-width: 767px){
    display: flex;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
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

export const CategoriesContainer = styled.section `
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
  transition: 0.5s;
  @media (max-width: 767px){
    position: fixed;
    bottom: -2000px;
    background: #344955;
    padding: 67px 0 0;
    height: calc(100% - 123px);
    width: 100%;
    text-align: center;
  }
`

export const LinkCategories = styled.p `
  color: #FFF;
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
`

export const MobileMenu = styled.div`
   border: 3px solid #fff;
   background: #344955;
   width: 35px;
   height: 35px;
   position: absolute;
   top: -21px;
   left: 50%;
   transform: translateX(-50%) rotate(45deg); 
   cursor: pointer;
   z-index: 1;
   transition: 0.5s;
`

export const MobileMenuContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100%;
   transform: rotate(-45deg);
   pointer-events: none;
`

export const MenuLine = styled.div`
  background: #f9aa33;
  width: 18px;
  height: 2px;
  margin-top: 5px;
  pointer-events: none;
  &:first-child{
    margin-top: 0;
  }
`


export const CategoriesContent = styled.div `
  background: #f4f5f9;
  height: 100vh;
  color: #fff;
  width: 260px;
  transition: 0.5s;
  @media (max-height: 616px){
    height: 100%;
  }
  @media (max-width: 767px){
    height: auto;
    width: 100%;
    position: fixed; 
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &.open{
    background : #f4f5f9;
    ${MobileMenu} {
      background: #f4f5f9;
      border-color: #344955;
    }
    ${CategoriesContainer} {
      bottom: 56px;
    }      
  }
`

export const LoaderContainer = styled.div `
  background: #f9aa33;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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