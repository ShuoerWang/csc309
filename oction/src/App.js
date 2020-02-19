/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import './App.css';
import HomePage from './react-components/HomePage';
import ItemPage from './react-components/ItemPage';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';


class App extends React.Component {

  state = {
    searchInput : ""
  }

  render() {
    return (
      <div> 
       <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' 
              render={() => (<HomePage state = {this.state}/>)} />
            <Route exact path='/ItemPage' 
              render={() => (<ItemPage searchInput={this.state.searchInput}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );  
  }
}

export default App;
