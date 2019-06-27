import React, {Component} from 'react';
import MyContext from './TriviaContext';
import api from "../helpers/api";


class MyProvider extends Component{
    state = {
        questions: null,
        categoryClicked: null
    };

    fetchQuestions = async (el) => {
        const categoryId = el.target.classList[0];
        const element = el.target;
        const questionsData =  await api.getQuestionsByCategory(categoryId);
        const {categoryClicked} = this.state;
        
        if(categoryClicked === null) {
            this.setState({
                categoryClicked: element,
                questions: questionsData
            });
            element.classList.add('active');
        } else {
            if(categoryClicked.classList[0] !== categoryId) {
                this.setState({
                    categoryClicked: element,
                    questions: questionsData
                });
                categoryClicked.classList.remove('active');
                element.classList.add('active');
            }
        }
    };

    render(){
        const {categories} = this.props;
        return(
            <MyContext.Provider value={{
                categories,
                fetchData: this.fetchQuestions,
                questions: this.state.questions
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;

