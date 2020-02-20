/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import './App.css';
import HomePage from './react-components/HomePage';
import ItemPage from './react-components/ItemPage';
import SearchPage from './react-components/SearchPage';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Merchandise from './Model/Merchandise';

class App extends React.Component {

  state = {
    searchInput : "",
    merchandises : []
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // 'this' is bound to the component in this arrow function.
    this.setState({
      [name]: value // [name] sets the object property name to the value of the 'name' variable.
    });

  };

  loadMerchandises = function () {
    this.state.merchandises.push(new Merchandise(1, "Nike Kobe 7", "fucking good", "/img/kobe.jpg"))
  }
    
  

  render() {
    this.loadMerchandises();
    return (
      <div> 
       <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' 
              render={() => (<HomePage 
                handleInputChange = {this.handleInputChange}
                //more attributes
                
                />)} />
            <Route exact path='/ItemPage' 
              render={() => (<ItemPage 
                searchInput = {this.state.searchInput}
                //more attributes
                
                />)}/>
            <Route exact path='/SearchPage' 
              render={() => (<SearchPage 
                searchInput = {this.state.searchInput}
                //more attributes
                
                />)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
