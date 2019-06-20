import React from 'react';
import {
  CategoriesContent,
  CategoriesTitle,
  CategoriesContainer,
  LinkCategories,
} from './style/CategoriesStyle';

const Categories = ({title, categories, eventClick}) => (
  <CategoriesContent>

    <CategoriesTitle>{title}</CategoriesTitle>
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