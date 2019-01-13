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
`

export const CategoriesContainer = styled.section `
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
  transition: 0.5s;
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


export const CategoriesContent = styled.div `
  background: #f4f5f9;
  height: 100vh;
  color: #fff;
  width: 260px;
  transition: 0.5s;
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