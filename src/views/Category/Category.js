import React from 'react';
import PropTypes from "prop-types";

const Category = ({ title , id, score}) => {

  const verifyAnswer = element => {
    console.log(element);
  }

  return (
    <section>
      <h1>Category page : {title}</h1>
      <h2>{id}</h2>

      <input type="text"/>

      <button type="submit" onClick={verifyAnswer}>Enter</button>

      <p>score : {score}</p>
        
    </section>
  )
}

Category.propTypes = {
  category: PropTypes.string
};

export default Category;