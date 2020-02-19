import React from "react";

import "./styles.css";

import Header from '../Header';

/* The ItemPage Component */
class ItemPage extends React.Component {
  constructor(props){
    super(props);
    
    console.dir(this.props.state.searchInput);
  }
  render() {
    return (
      <div className="item__bg-image center">
        <Header/>
      </div>
    );
  }
}

export default ItemPage;
