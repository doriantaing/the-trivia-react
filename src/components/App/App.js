import React, {Component, Fragment} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CategoriesContainer from '../../views/Categories/CategoriesContainer';
import CategoriesMobile from '../../views/Categories/CategoriesMobile';
// import QuestionMobile from '../../views/Question/QuestionMobile';



class App extends Component {  
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={CategoriesContainer}/>
            <Route path="/categories" component={CategoriesMobile}/>
            {/* <Route path="/trivia" component={QuestionMobile}/> */}
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
