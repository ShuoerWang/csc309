/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import './styles.css';
import Header from './../Header';
import SearchBox from './../SearchBox';

class HomePage extends React.Component {

  // a 'global' state that you can pass through to any child componenets of App.
  //   In the Routes below they are passed to both the Home and Queue states.
  // state = {
  //   searchInput : ""
  // }

  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // 'this' is bound to the component in this arrow function.
    this.setState({
      [name]: value // [name] sets the object property name to the value of the 'name' variable.
    });

    console.dir(this.state.searchInput);

  };

  // handleButtonChange = (event) => {
  //   event.preventDefault()
  //   console.dir(this.state.searchInput)
  //   //link to search page
  // };

  render() {
    document.title = "October's Very Oction";
    return (
      <div className = "home__bg-image center"> 
        <Header/>
        <div id="mainTextDiv">
          Buy & Sell <br/>
          Authenticate Sneakers
        </div>
        <SearchBox state = {this.state}
          handleInputChange = {this.handleInputChange}
          // handleButtonChange = {this.handleButtonChange}
        />
      </div>
    );  
  }
}

export default HomePage;
