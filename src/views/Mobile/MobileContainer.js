import React , {Component} from 'react';
import MobileHome from './MobileHome/MobileHome';
import Categories from './../Categories/Categories';
import Question from './../Question/Question';
import {Spring} from "react-spring";

class MobileContainer extends Component {
    state = {
        isHome : true,
        isCategory: false,
        isQuestion: false,
    };


    eventClick = (element) => {
        let {isHome , isCategory , isQuestion} = this.state;

        if(isHome && !isCategory && !isQuestion){
            this.setState({
                isHome: false,
                isCategory: true,
            });
        } else if(!isHome && isCategory && !isQuestion){
            this.props.context.fetchData(element);

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
    };

    
    render(){
        const {isHome , isCategory} = this.state;
        const {context, isMobile} = this.props;
        return (
            <div>
                {isHome ? (
                    <Spring
                        from={{ transform: 'scale(0) translateY(1000px)'}}
                        to={{ transform: 'scale(1) translateY(0)'}}
                    >
                        {props => (
                            <div style={props}>
                                <MobileHome eventClick={this.eventClick}/>
                            </div>
                        )}
                    </Spring>
                ) : isCategory ? (
                    <Categories
                        title='Select a category'
                        context={context}
                        eventClick={this.eventClick}
                        isMobile={isMobile}
                    />
                ) : (
                    <Question
                        context={context}
                        isMobile={isMobile}
                        clickMobile={this.eventClick}
                    />
                )}
            </div>
        );
    }
}

export default MobileContainer;