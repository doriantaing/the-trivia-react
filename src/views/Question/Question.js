import React from 'react';
import PropTypes from "prop-types";
import IconHeart from './IconHeart';
import {Section, SectionContainer , GlobalStyle , QuestionContent , QuestionText , QuestionInput , QuestionButton , TopRight} from './style/QuestionStyle';


const Question = ({
  score,
  attempt,
  cat_questions,
  questionNb,
  eventChange,
  eventClick,
  restartGame,
  inputValue,
  isFocus,
  keyEnter,
  animWrong
}) => {
  return (
    <Section>
      <SectionContainer ref={animWrong}>
      
        <GlobalStyle/> 

        {cat_questions && attempt > 0 && (
          <QuestionContent>
            <h1>Question {questionNb + 1}</h1>
            <QuestionText>{ cat_questions.questions[questionNb].question}</QuestionText>
            <QuestionInput type="text" 
            onChange={eventChange}
            onKeyUp={eventChange}
            onKeyDown={keyEnter}
            placeholder="Answer..."
            value={inputValue}
            className={isFocus ? "focus" : ""}
            />
            <TopRight>
              <div>
                 <IconHeart attempt={attempt}/>
              </div>
              <p>{score} {score < 2 ? "point": "points"}</p>
            </TopRight>

            <QuestionButton type="submit" onClick={eventClick}>Enter</QuestionButton>
          </QuestionContent>
        )}

        {attempt === 0 && (
          <QuestionContent>
            <h1>Game Over</h1>

            <QuestionText>You won {score} points</QuestionText>

            <QuestionButton restartGame onClick={restartGame}>Try Again</QuestionButton>

            <TopRight>
              <IconHeart attempt={attempt}/>
            </TopRight>
          </QuestionContent>
        )}
      </SectionContainer>
    </Section>
  )
}

Question.propTypes = {
  category: PropTypes.string
};

export default Question;