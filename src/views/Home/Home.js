import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import Loader from 'react-loaders';

//  All styles on this page

const Container = styled.section `
  display: grid;
  grid-template-columns: 260px 1fr;
`

const HomeRight = styled.div`
  position: relative;
`

const HomeTitle = styled.h4 `
  color: #f9aa33;
  font-size: 24px;
  padding: 20px 0 40px;
`

const HomeRightTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  font-size: 34px;
  color: #575757;
  opacity: 0.5;
`

const Categories = styled.div `
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

const LinkCategories = styled.a `
   color: #FFF;
   font-size: 14px;
   text-decoration: none;
   margin-bottom: 18px;
   &:hover{
     color: #f9aa33;
   }
`

const Home = ({categories}) => (
  <Container>
    <Categories>
      <HomeTitle>Trivia Game</HomeTitle>

      {categories && (
        <CategoriesContainer>
          {categories.map(category => (
            <LinkCategories href={`/categories/${category.id}`} key={category.id}>{category.title}</LinkCategories>
          ))}
        </CategoriesContainer>
      )}
    </Categories>

    <HomeRight>
      <HomeRightTitle>Selectionner vôtre categorie</HomeRightTitle>
    </HomeRight>

    {/* Loader Home  */}
    {!categories && (<Loader type="pacman" active/>)}
  </Container>
)

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, title: PropTypes.title}))
};

export default Home;