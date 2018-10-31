import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';


const Categories = styled.section`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
  color: black;
`

const LinkCategories = styled.a`
   color: black;
   text-decoration: none;
   &:hover{
     color: darkred;
   }
`


const Home = ({categories}) => (
  <section>
    <h1>Homepage</h1>

    {categories && (
      <Categories>
        {categories.map(category => (
          <LinkCategories href={`/categories/${category.id}`} key={category.id}>{category.title}</LinkCategories>
        ))}
      </Categories>
    )}

  </section>
)

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, title: PropTypes.title}))
};

export default Home;