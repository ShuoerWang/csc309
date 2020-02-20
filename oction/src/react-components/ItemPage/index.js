import React from "react";

import "./styles.css";

import Header from '../Header';

/* The ItemPage Component */
class ItemPage extends React.Component {

  render() {
    const {searchInput} = this.props;
    
    return (
      <div className="item__bg-image center">
        <Header/>
      </div>
    );
  }
}

export default ItemPage;
