import React , {useState , useRef} from 'react';
import IconHeart from './../Question/IconHeart';
import Input from '../../helpers/Input';
import {
  Section,
  SectionContainer,
  GlobalStyle,
  QuestionContent,
  QuestionText,
  QuestionButton,
  TopRight,
  MobileFooter,
  MobileFooterTitle,
  MobileButton,
  GameOver
} from './style/QuestionStyle';
import storage from "../../helpers/Storage";


const Question = ({
  isMobile,
  mobileClick,
  context
}) => {

  const {questions, attempt, changeAttempt, storedQuestions} = context;
  const [score, changeScore] = useState(0);
  const [questionNb , changeQuestionNb] = useState(0);
  const [inputValue, changeInputValue] = useState('');
  const [isFocus , changeFocus] = useState(false);
  const animWrong = useRef('');

  const verifyAnswer = () => {
    let answer;

    if(questions){
      answer = questions[questionNb].answer;
    } else {
      answer = storedQuestions[questionNb].answer;
    }

    // if(questionNb <= this.state.cat_questions.questions.length - 1)
    inputValue === answer && inputValue !== "" ? correct() : wrong();
    changeFocus(false);
  };

  // If correct update state
  const correct = () => {
    if(questionNb <= 10){
      changeScore(score + 1);
      changeQuestionNb(questionNb + 1);
      changeInputValue('');

      context.storeLocal(score, questionNb, attempt);
    }
  };

  // If wrong update state and add anim
  const wrong = () => {
    if (attempt > 0 && inputValue !== '') {
      changeAttempt();
      // changeQuestionNb(questionNb + 1);
      changeInputValue('');

      if(attempt >= 1){
        animWrong.current.classList.add('shake');

        setTimeout(() => {
          animWrong.current.classList.remove('shake');
        }, 500);
      }
    }
  };

  const restartGame = () => {
    changeScore(0);
    changeAttempt(3);
    changeQuestionNb(0);

    context.storeLocal(score, questionNb, attempt);
    storage.set('questionNb', 0);
    storage.set('score', 0);
  };

  const questionsData = questions || storedQuestions;
  context.storeLocal(score, questionNb, attempt);
  return (
    <Section>
      <SectionContainer ref={animWrong}>
      
        <GlobalStyle/> 

        {questionsData && attempt > 0 ?
          <QuestionContent>
            <h1>Question {questionNb + 1}</h1>
            <QuestionText>{ questions !== null ? questions[questionNb].question : storedQuestions[questionNb].question }</QuestionText>
            <Input
              inputValue={inputValue}
              changeInputValue={changeInputValue}
              verifyAnswer={verifyAnswer}
              isFocus={isFocus}
              changeFocus={changeFocus}
            />
            <TopRight>
              <div>
                 <IconHeart attempt={attempt}/>
              </div>
              <p>{score} {score < 2 ? "point": "points"}</p>
            </TopRight>

            <QuestionButton type="submit" onClick={verifyAnswer}>Submit</QuestionButton>
          </QuestionContent>
            :
          <React.Fragment>
          </React.Fragment>
        }

        {attempt === 0 && (
          <GameOver>
            <QuestionContent>
              <h1>Game Over</h1>
  
              <QuestionText>Score: {score}</QuestionText>
  
              <QuestionButton restartGame onClick={restartGame}>Try again</QuestionButton>
  
              <TopRight>
                <IconHeart attempt={attempt}/>
              </TopRight>
            </QuestionContent>
          </GameOver>
        )}
      </SectionContainer>

      {isMobile && (
        <div>
          <MobileButton onClick={mobileClick}>Back</MobileButton>
          <MobileFooter>
            <MobileFooterTitle>寿司ゲーム</MobileFooterTitle>
          </MobileFooter>
        </div>
      )}
    </Section>
  )
}

export default Question;