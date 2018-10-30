import React from 'react';
import PropTypes from "prop-types";

const Category = ({title, score, question, questionNb}) => {

  const verifyAnswer = element => {
    console.log(element);
  }

  return (
    <section>
      <h1>Category page : {title}</h1>

      {question && (
        <div>
          <p>{question[questionNb].question} ?</p>         
          <input type="text"/>

          <button type="submit" onClick={verifyAnswer}>Enter</button>

          <p>score : {score}</p>

        </div>
      )}
    </section>
  )
}

Category.propTypes = {
  category: PropTypes.string
};

export default Category;