import React, {Component} from 'react';
import MyContext from './TriviaContext';
import api from "../helpers/Api";
import storage from "../helpers/Storage";

class MyProvider extends Component{
    state = {
        questions: null,
        questionNb: storage.get('questionNb') ? storage.get('questionNb') : 0,
        lastClicked: null,
        categoryClicked: storage.get('category') ? storage.get('category') : null,
        isClicked: storage.get('click') ? storage.get('click') : false,
        attempt: storage.get('attempt') ? storage.get('attempt') : 3,
    };

    fetchQuestions = async (el) => {
        const categoryId = el.target.classList[0];
        const element = el.target;
        const questionsData = await api.getQuestionsByCategory(categoryId);
        const {categoryClicked, isClicked} = this.state;
        const categoryActive = document.querySelector('.active');

        // If not same id change state with new element
        if (categoryClicked !== categoryId) {
            this.setState({
                categoryClicked: element
            })
        }

        // Fetch corresponding questions
        this.setState({
            questions: questionsData,
        });
        // this.generateRandomQuestion();

        // Add current element class active
        element.classList.add('active');

        
        if(categoryActive){
            if(window.innerWidth > 768 && categoryActive.classList[0] !== categoryId){
                categoryActive.classList.remove('active');
            }
        }


        if (typeof categoryClicked === 'object' && categoryClicked !== null){
            if (categoryClicked.classList[0] !== categoryId) {
                categoryClicked.classList.remove('active');
                this.setState({
                    attempt: 3,
                })
            }
        }

        await storage.set('category', categoryId);
        await storage.set('click', isClicked);
    };


    // Store data in local storage
    storeLocal = (score, questionNb, attempt) => {
        storage.set('score', score);
        storage.set('questionNb', questionNb);
        storage.set('attempt', attempt);
    };

    generateRandomQuestion = () => {
        this.setState({
            questionNb: Math.floor(Math.random() * this.state.questions.length)
        })
    };


    changeAttempt = (nbr) => {
        this.setState(prevState => ({
            attempt: nbr ? nbr : prevState.attempt - 1
        }));
    };

    render(){
        const {categories, storedQuestions} = this.props;
        const {questions, attempt, questionNb} = this.state;
        
        return(
            <MyContext.Provider value={{
                categories,
                storedQuestions,
                fetchData: this.fetchQuestions,
                questions: questions,
                attempt: attempt,
                changeAttempt: this.changeAttempt,
                storeLocal: this.storeLocal,
                questionNb: questionNb,
                generateRandom: this.generateRandomQuestion
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;

