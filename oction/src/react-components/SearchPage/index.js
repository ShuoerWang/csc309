import React from "react";

import "./styles.css";

import Header from '../Header';

/* The SearchPage Component */
class SearchPage extends React.Component {

  render() {
    const {searchInput} = this.props;
    
    return (
      <div className="search__bg-image center">
        <Header/>
      </div>
    );
  }
}

export default SearchPage;
