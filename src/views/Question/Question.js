import React from 'react';
import PropTypes from "prop-types";
import IconHeart from './../Question/IconHeart';
import {Section, SectionContainer , GlobalStyle , QuestionContent , QuestionText , QuestionInput , QuestionButton , TopRight , MobileFooter , MobileFooterTitle , MobileButton, GameOver} from './style/QuestionStyle';


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
  animWrong,
  isMobile,
  mobileClick,
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
            placeholder="Réponse..."
            value={inputValue}
            className={isFocus ? "focus" : ""}
            />
            <TopRight>
              <div>
                 <IconHeart attempt={attempt}/>
              </div>
              <p>{score} {score < 2 ? "point": "points"}</p>
            </TopRight>

            <QuestionButton type="submit" onClick={eventClick}>Entrer</QuestionButton>
          </QuestionContent>
        )}

        {attempt === 0 && (
          <GameOver>
            <QuestionContent>
              <h1>Game Over</h1>
  
              <QuestionText>Ton score est de {score} / {questionNb}</QuestionText>
  
              <QuestionButton restartGame onClick={restartGame}>Try Again</QuestionButton>
  
              <TopRight>
                <IconHeart attempt={attempt}/>
              </TopRight>
            </QuestionContent>
          </GameOver>
        )}
      </SectionContainer>

      {isMobile && (
        <div>
          <MobileButton onClick={mobileClick}>Retour</MobileButton>
          <MobileFooter>
            <MobileFooterTitle>寿司ゲーム</MobileFooterTitle>
          </MobileFooter>
        </div>
      )}
    </Section>
  )
}

Question.propTypes = {
  category: PropTypes.string
};

export default Question;