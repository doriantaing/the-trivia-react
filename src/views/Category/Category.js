import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Section = styled.section`
    color: darkred;
`

const Category = ({title, score, question, questionNb , eventChange , eventClick}) => {

  return (
    <Section>
      <h1>Category page : {title}</h1>

      {question && (
        <div>
          <p>{question[questionNb].question}
            ?</p>
          <input type="text" onChange={eventChange}/>

          <button type="submit" onClick={eventClick}>Enter</button>

          <p>score : {score}</p>

        </div>
      )}
    </Section>
  )
}

Category.propTypes = {
  category: PropTypes.string
};

export default Category;