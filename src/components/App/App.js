import React, {Component, Fragment} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CategoriesContainer from '../../views/Categories/CategoriesContainer';


class App extends Component {  
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={CategoriesContainer}/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
