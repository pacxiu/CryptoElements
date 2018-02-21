import React, { Component } from 'react';
import test from '../assets/testimg.png';

class Home extends Component {
  render() {
    return (
      	<div className="container">
	    	<h1>Hello wosfsdfsdfrld!</h1>
		    <p>scss and sass</p>

			<p>testt</p>

			<img src={test} alt="test"/>
    	</div>
    );
  }
}

export default Home;