import React , {useState} from 'react';
import IconHeart from './../Question/IconHeart';
import {
  Section,
  SectionContainer,
  GlobalStyle,
  QuestionContent,
  QuestionText,
  QuestionInput,
  QuestionButton,
  TopRight,
  MobileFooter,
  MobileFooterTitle,
  MobileButton,
  GameOver
} from './style/QuestionStyle';


const Question = ({
  score,
  eventChange,
  eventClick,
  restartGame,
  inputValue,
  isFocus,
  keyEnter,
  animWrong,
  isMobile,
  mobileClick,
  questions
}) => {

  const [questionNb , changeQuestionNb] = useState(0);
  const [attempt , changeAttempt] = useState(3);

  console.log('QUESTIONS',questions[questionNb].question);

  return (
    <Section>
      <SectionContainer ref={animWrong}>
      
        <GlobalStyle/> 

        {questions && attempt > 0 && (
          <QuestionContent>
            <h1>Question {questionNb + 1}</h1>
            <QuestionText>{ questions[questionNb].question}</QuestionText>
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

            <QuestionButton type="submit" onClick={eventClick}>Entrer</QuestionButton>
          </QuestionContent>
        )}

        {attempt === 0 && (
          <GameOver>
            <QuestionContent>
              <h1>Game Over</h1>
  
              <QuestionText>Ton score est de {score} / {questionNb}</QuestionText>
  
              <QuestionButton restartGame onClick={restartGame}>Recommencer</QuestionButton>
  
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

export default Question;