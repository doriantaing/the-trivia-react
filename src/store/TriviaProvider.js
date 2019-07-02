import React, {Component} from 'react';
import MyContext from './TriviaContext';
import api from "../helpers/Api";
import storage from "../helpers/Storage";

class MyProvider extends Component{
    state = {
        questions: null,
        categoryClicked: null,
        isClicked: false,
        attempt: 3,
    };

    fetchQuestions = async (el) => {
        const categoryId = el.target.classList[0];
        const element = el.target;
        const questionsData =  await api.getQuestionsByCategory(categoryId);
        const {categoryClicked, isClicked} = this.state;

        this.setState({
            categoryClicked: element,
            questions: questionsData
        });

        element.classList.add('active');
        categoryClicked !== null && categoryClicked.classList.remove('active');

        await storage.set('category', element.textContent);
        await storage.set('click', isClicked);
    };


    // Store data in local storage
    storeLocal = (score, questionNb, attempt) => {
        storage.set('score', score);
        storage.set('questionNb', questionNb);
        storage.set('attempt', attempt);
    };


    changeAttempt = () => {
        this.setState(prevState => ({
            attempt: prevState - 1
        }))
    };

    render(){
        const {categories} = this.props;
        const {questions, attempt} = this.state;

        return(
            <MyContext.Provider value={{
                categories,
                fetchData: this.fetchQuestions,
                questions: questions,
                attempt: attempt,
                changeAttempt: this.changeAttempt,
                storeLocal: this.storeLocal,
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;

