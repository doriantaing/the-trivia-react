import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/categories/:name" component={CategoryContainer}/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
