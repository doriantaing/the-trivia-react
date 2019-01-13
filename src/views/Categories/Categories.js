import React from 'react';
import {
  CategoriesContent,
  CategoriesTitle,
  CategoriesContainer,
  LinkCategories,
} from './style/CategoriesStyle';

const Categories = ({categories, eventClick}) => (
  <CategoriesContent>

    <CategoriesTitle>寿司ゲーム</CategoriesTitle>
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