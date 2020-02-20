/* New cleaned up version of App.js */
import React from 'react';

// Importing react-router-dom to use the React Router
import './styles.css';
import Header from './../Header';
import SearchBox from './../SearchBox';

class HomePage extends React.Component {
  // handleButtonChange = (event) => {
  //   event.preventDefault()
  //   console.dir(this.state.searchInput)
  //   //link to search page
  // };

  render() {
    const {
      handleInputChange
    } = this.props;

    document.title = "October's Very Oction";
    return (
      <div className = "home__bg-image center"> 
        <Header/>
        <div id="mainTextDiv">
          Buy & Sell <br/>
          Authenticate Sneakers
        </div>
        <SearchBox 
          handleInputChange = {handleInputChange}
          // handleButtonChange = {this.handleButtonChange}
        />
      </div>
    );  
  }
}

export default HomePage;
