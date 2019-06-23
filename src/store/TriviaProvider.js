import React, {Component} from 'react';
import MyContext from './TriviaContext';
import api from "../helpers/api";


class MyProvider extends Component{
    state = {
        questions: null
    };

    fetchQuestions = async (el) => {
        const categoryId = el.target.classList[0];
        const questionsData =  await api.getQuestionsByCategory(categoryId);

        this.setState({
            questions: questionsData
        });
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

