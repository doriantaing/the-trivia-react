import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

const Home = ({categories}) => (
  <section>
    <h1>Homepage</h1>
    {categories.length > 0 && (
      <section>
         {categories.map(category => (
           <Link to={`/categories/${category.id}`} key={category.id}>{category.title}</Link>
         ))}
      </section>
    )}
  </section>
)

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.title,

    })
  ),
};


export default Home;