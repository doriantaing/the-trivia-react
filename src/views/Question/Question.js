import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const SectionContainer = styled.section`
  background: #fff;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 35px 40px 21px;
`

const Section = styled.div`
  position: relative;
`

const QuestionText = styled.p`
  color: #575757;
  font-size: 18px;
`

const Question = ({score, attempt , question , questionNb, eventChange , eventClick}) => {
  console.log(question)
  return (
    <Section>
    <SectionContainer>
      
      {question && (
        <div>
          <h1>Question : {questionNb + 1}</h1>
          <QuestionText>{question[questionNb].question}?</QuestionText>
          <input type="text" onChange={eventChange}/>

          <button type="submit" onClick={eventClick}>Enter</button>

          <p>score : {score}</p>

          <p>attempt : {attempt} </p>
        </div>
      )}

      {attempt === 0 && (
        <h1>Tu es nul , Game Over</h1>
      )}
    </SectionContainer>
    </Section>
  )
}

Question.propTypes = {
  category: PropTypes.string
};

export default Question;