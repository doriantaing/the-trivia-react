import React , {Component, Fragment} from 'react';
import Home from './Home';
import MobileContainer from "../Mobile/MobileContainer";
import MyContext from "../../store/TriviaContext";

class HomeContainer extends Component{
    state = {
      isMobile: false,

    };

    componentDidMount() {
        // handle mobile display
        this.displayMobile();
        window.addEventListener('resize', this.displayMobile);
    }

    displayMobile = () => {
        const windowWidth = window.innerWidth;

        if(windowWidth > 768) {
            this.setState({
                isMobile: false
            })
        } else {
            this.setState({
                isMobile: true,
            })
        }
    };
    
    render(){
        const {isMobile} = this.state;
        return(
            <Fragment>
                {isMobile ?
                    <MyContext.Consumer>
                        { context => (
                            <MobileContainer context={context} isMobile={isMobile}/>
                        )}
                    </MyContext.Consumer>
                    :
                    <Home/>
                }
            </Fragment>
        )
    }
}

export default HomeContainer