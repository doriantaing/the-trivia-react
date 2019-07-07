import React from 'react';
import {QuestionInput} from "../views/Question/style/QuestionStyle";

const Input = (
    {
        verifyAnswer,
        inputValue,
        changeInputValue,
        isFocus,
        changeFocus
    }) => {

    const eventChange = (el) => {
        if (inputValue === ""){
            changeFocus(false)
        } else {
            changeFocus(true)
        }

        changeInputValue(el.target.value)
    };

    const keyEnter = (el) => {
        if(inputValue !== '' && el.keyCode === 13){
            verifyAnswer();
        }
    };

    return(
        <QuestionInput type="text"
                       onChange={eventChange}
                       onKeyUp={eventChange}
                       onKeyDown={keyEnter}
                       placeholder="Answer..."
                       value={inputValue}
                       className={isFocus ? "focus" : ""}
        />


    )
};

export default Input;