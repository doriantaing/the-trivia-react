import React from 'react';
import storage from '../../helpers/Storage';
import {
  CategoriesContent,
  CategoriesTitle,
  CategoriesContainer,
  LinkCategories,
} from './style/CategoriesStyle';
import {MobileFooter, MobileFooterTitle} from "../Question/style/QuestionStyle";

const Categories = ({title, context, eventClick, isMobile}) => {
  const { categories } = context;
  return(
    <CategoriesContent>
      <CategoriesTitle>{title}</CategoriesTitle>
      {categories && (
        <CategoriesContainer>
          {categories.map(category => (
            <LinkCategories
                className={`${category.id}  ${storage.get('category') && storage.get('category') === category.id.toString() && 'active'}`}
                key={category.id}
                data-letters={category.title}
                onClick={isMobile ? eventClick : context.fetchData}
            >
              {category.title}
            </LinkCategories>
          ))}
          { isMobile && (
              <React.Fragment>
                <MobileFooter>
                  <MobileFooterTitle>寿司ゲーム</MobileFooterTitle>
                </MobileFooter>
              </React.Fragment>
          )}
        </CategoriesContainer>
      )}
    </CategoriesContent>
  )
};


export default Categories;