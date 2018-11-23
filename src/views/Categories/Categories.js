import React from 'react';
import {CategoriesContent , CategoriesTitle , CategoriesContainer , LinkCategories} from './style/CategoriesStyle';

const Categories = ({categories, eventClick , isMobile}) => (
    <CategoriesContent>

    {isMobile &&  (
       <h4>Hello</h4>
    )}
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