import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Section = styled.section`
    color: darkred;
`

const Question = ({title, score, attempt ,question, questionNb , eventChange , eventClick}) => {

  return (
    <Section>
      <h1>Category page : {title}</h1>
      
      <Link to={`/`}>Back to Categories</Link>

      {question && (
        <div>
          <p>{question[questionNb].question}
            ?</p>
          <input type="text" onChange={eventChange}/>

          <button type="submit" onClick={eventClick}>Enter</button>

          <p>score : {score}</p>

          <p>attempt : {attempt} </p>
        </div>
      )}

      {attempt === 0 && (
        <h1>Tu es nul , Game Over</h1>
      )}
    </Section>
  )
}

Question.propTypes = {
  category: PropTypes.string
};

export default Question;