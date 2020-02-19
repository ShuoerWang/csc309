import React from "react";

import "./styles.css";
import Logo from "../../img/logo.png";

/* The Header Component */
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className = "headDiv" >
                 <img className = "logo" src={Logo}></img>
                 <h1 className = "title">October's Very Oction</h1>
            </div>
          <div className = "menuDiv">
                 <ul className="menu">
                     <li><a href="#">About us</a></li>
                     <li><a href="#">My account</a></li>
                 </ul>
          </div>
      </div>
    );
  }
}

export default Header;
