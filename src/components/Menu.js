import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      	<nav id="menu">        
            <div className="container">
            	<Link to="/">logo</Link>

            	<Link to="/marketplace" className="u-uppercase">marketplace</Link>

            	<Link to="">???</Link>
            </div>
        </nav>
    );
  }
}

export default Menu;