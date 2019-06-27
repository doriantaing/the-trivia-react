import React from 'react';
import {
  CategoriesContent,
  CategoriesTitle,
  CategoriesContainer,
  LinkCategories,
} from './style/CategoriesStyle';

const Categories = ({title, context}) => {
  const {categories} = context;
  return(
    <CategoriesContent>
      <CategoriesTitle>{title}</CategoriesTitle>
      {categories && (
        <CategoriesContainer>
          {categories.map(category => (
            <LinkCategories
                className={category.id}
                key={category.id}
                data-letters={category.title}
                onClick={context.fetchData}
            >
              {category.title}
            </LinkCategories>
          ))}
        </CategoriesContainer>
      )}
    </CategoriesContent>
  )
};


export default Categories;