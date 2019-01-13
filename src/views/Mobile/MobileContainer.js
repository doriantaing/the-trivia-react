import React , {Component} from 'react';
import MobileHome from './MobileHome/MobileHome';
import Categories from './../Categories/Categories';
import Questions from './../Question/Question';

class MobileContainer extends Component {
    state = {
        isHome : true,
        isCategory: false,
        isQuestion: false,
        categories: this.props.categories,
    }


    eventClick = (element) => {
        let {isHome , isCategory , isQuestion} = this.state;
        if(isHome && !isCategory && !isQuestion){
            this.setState({
                isHome: false,
                isCategory: true,
            });
        } else if(!isHome && isCategory && !isQuestion){
            this.props.categoriesClick(element);

            this.setState({
                isHome: false,
                isCategory: false,
                isQuestion: true,
            });
        } else if(!isHome && !isCategory && isQuestion){
            this.setState({
                isHome: false,
                isCategory: true,
                isQuestion: false,
            });
        }
    }

    
    render(){
        let {isHome , isCategory , categories} = this.state;
        let {cat_questions , questionNb, score , attempt , eventChange , eventClick , restartGame , inputValue , isFocus , keyEnter , animWrong ,isMobile} = this.props;

        let mobileHome = <MobileHome eventClick={this.eventClick}/> ;
        let mobileCategories = <Categories title='Sélectionner une catégorie' categories={categories} eventClick={this.eventClick}/>;
        let mobileQuestions =  
        <Questions cat_questions={cat_questions}
        questionNb={questionNb}
        score={score}
        attempt={attempt}
        eventChange={eventChange}    
        eventClick={eventClick}
        restartGame={restartGame}
        inputValue={inputValue}
        isFocus={isFocus}
        keyEnter={keyEnter}
        animWrong={animWrong}
        isMobile={isMobile}
        mobileClick={this.eventClick} />

        let mobileComponent = isHome ? mobileHome : isCategory ? mobileCategories : mobileQuestions;

        return (
            <div>
                {mobileComponent}
            </div>
        );
    }
}

export default MobileContainer;