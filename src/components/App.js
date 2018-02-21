import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../dist/normalize.css';
import '../dist/main.css';

import Menu from './Menu.js';
import Home from './Home.js';
import Marketplace from './Marketplace.js';
import Footer from './Footer.js';

class App extends Component {

  	render() {
	    return (
	     	<Router>
	     		<div>
	     			<Menu />

		     		<Route exact path = "/" component = {Home} />
		     		<Route exact path = "/marketplace" component = {Marketplace} />

				    <Footer />
	     		</div>
	     	</Router>
	    );
  	}
}

export default App;
