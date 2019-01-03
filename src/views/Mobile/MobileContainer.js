import React , {Component} from 'react';
import MobileHome from './MobileHome/MobileHome';
import MobileCategories from './MobileCategories/MobileCategories';
import MobileQuestions from './MobileQuestions/MobileQuestions';

class MobileContainer extends Component {
    state = {
        isHome : true,
        isCategory: false,
        isQuestion: false,
        categories: this.props.categories,
    }


    startGame = () => {
        let {isHome , isCategory , isQuestion} = this.state;
        if(isHome && !isCategory && !isQuestion){
            this.setState({
                isHome: false,
                isCategory: true,
            });
        }
        console.log(this.state);    
    }
    
    render(){
        let {isHome , isCategory} = this.state;
        let mobileComponent = isHome ? <MobileHome eventClick={this.startGame}/>  : isCategory ? <MobileCategories categories={this.state.categories}/> : <MobileQuestions/>;
        
        return (
            <div>
                {mobileComponent}
            </div>
        );
    }
}

export default MobileContainer;