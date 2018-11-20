import React from 'react';
import styled from 'styled-components';

const CategoriesTitle = styled.h4 `
  color: #f9aa33;
  font-size: 24px;
  padding: 20px 0 40px;
  margin: 0;
`

const CategoriesContent = styled.div `
  background: #344955;
  height: 100vh;
  color: #fff;
  width: 260px;
`
const CategoriesContainer = styled.section `
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 20px;
`

const LinkCategories = styled.p `
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

const Categories = ({categories, eventClick}) => (
    <CategoriesContent>
      <CategoriesTitle>Trivia Game</CategoriesTitle>

      {categories && (
        <CategoriesContainer>
          {categories.map(category => (
            <LinkCategories className={category.id} key={category.id} onClick={eventClick}>{category.title}</LinkCategories>
          ))}
        </CategoriesContainer>
      )}
    </CategoriesContent>
)

export default Categories;