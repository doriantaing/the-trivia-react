import React, {Component} from 'react';
import './App.scss';
import CategoriesContainer from '../../views/Categories/CategoriesContainer';




class App extends Component {  
  render() {
    return (
      <div className="App">
        <CategoriesContainer/>
      </div>
    );
  }
}

export default App;
