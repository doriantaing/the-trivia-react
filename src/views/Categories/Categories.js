import React from 'react';
import {
  CategoriesContent,
  CategoriesTitle,
  CategoriesContainer,
  LinkCategories,
  MobileMenu,
  MobileMenuContainer,
  MenuLine
} from './style/CategoriesStyle';

const Categories = ({categories, eventClick, isMobile, clickMobile , categoryClicked}) => (
  <CategoriesContent>

    <CategoriesTitle>寿司ゲーム</CategoriesTitle>
    {isMobile && (
      <MobileMenu onClick={clickMobile}>
        <MobileMenuContainer>
          <MenuLine/>
          <MenuLine/>
          <MenuLine/>
        </MobileMenuContainer>
      </MobileMenu>
    )}
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