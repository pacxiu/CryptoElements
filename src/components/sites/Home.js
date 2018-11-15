import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Slider from 'react-slick';

import rule from "../../assets/rule.jpg";
import eth_orange from "../../assets/icons/eth_orange.png";
import metamask_orange from "../../assets/icons/metamask_orange.png";

import card_periodic from "../../assets/card_periodic.jpg";
import card_scientist from "../../assets/card_scientist.jpg";
import card_element from "../../assets/card_element.jpg";

import ElementCard from '../partials/cards/ElementCard';

class Home extends Component {
	constructor() {
		super();

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0,0);
		window.addEventListener('scroll', this.handleScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, false);
	}

	handleScroll() {
		const windowScrollTop = window.scrollY;
		const windowHeight = window.innerHeight;
		const cardContainer = ReactDOM.findDOMNode(this.refs.cardContainer);
		const cardVisiblePart = cardContainer.clientHeight / 3;

		const iconsContainer = ReactDOM.findDOMNode(this.refs.iconsContainer);
		const iconsVisiblePart = iconsContainer.clientHeight / 4;

		if (windowScrollTop > (cardContainer.offsetTop - windowHeight + cardVisiblePart) ) {
			cardContainer.classList.add('animate-in');
		} 

		if (windowScrollTop > (iconsContainer.offsetTop - windowHeight + iconsVisiblePart) ) {
			iconsContainer.classList.add('animate-in');
		} 
	}

	render() {
	  	const sliderSettings = {
	  		dots: false,
	  		arrows: true,
	  		infinite: true,
	  		autoplay: true,
	  		speed: 1000,
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
	  		autoplaySpeed: 3000,
	  		vertical: true,
	  		verticalSwiping: true,
	  		pauseOnHover: false,
	  		responsive: [
	        	{
	        		breakpoint: 768,
	        		settings: {
	        			vertical: false,
	        			verticalSwiping: false
	        		}
	        	}
	        ]
	  	};

  	// TODO SLIDER, here
  	// const word = [];

    return (
    	<div>
    		<section className="full-height main-container">
				<div className="container">
			    	<h1 className="u-text-center">Crypto <br/> Elements</h1>
			    	<Link to="/laboratory" className="btn">Buy an element</Link>
		    	</div>
	    	</section>

	    	<section className="home-section">
				<div className="container ">
					<h2 className="u-text-center u-accent-primary">Crypto Elements Collectibles</h2>
					<p>Crypto Elements is a platform for collecting 100% unique and one of a kind digital chemical elements. Each of them is represented by only one ERC 721 token. It can not be destroyed or replicated, it is insured by logic behind <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x67123afd93dd99c2b7587ea506843bfd9485d95e" className="linker">Smart Contract</a> deployed on <a target="_blank" rel="noopener noreferrer" href="https://ethereum.org/" className="linker">Ethereum Blockchain</a>.</p>

		    	</div>
	    	</section>

	    	<div className="home-section card-section" ref="cardContainer">
	    		<div className="container">
					<div className="col-4">
						<Link to="/laboratory/periodic" className="image-container" data-color="12">
							<img src={card_periodic} alt=""/>
							<div className="overlay">
								<div className="btn --inverted">See periodic table</div>
							</div>
						</Link>
						<div>
							<p className="card-title">periodic table card</p>
							<p>Buy special Periodic Table card and receive 1% fee for each transaction made on Crypto Elements market.</p>
						</div>
					</div>
					<div className="col-4">
						<Link to="/laboratory/scientist" className="image-container" data-color="11">
							<img src={card_scientist} alt=""/>
							<div className="overlay">
								<div className="btn --inverted">See scientists</div>
							</div>
						</Link>
						<div>
							<p className="card-title">scientist cards</p>
							<p>Buy Scientist card and receive 1% fee for each transactions with Elements they discovered.</p>
						</div>
					</div>
					<div className="col-4">
						<Link to="/laboratory" className="image-container" data-color="7">
							<img src={card_element} alt=""/>
							<div className="overlay">
								<div className="btn --inverted">See Elements</div>
							</div>
						</Link>
						<div>
							<p className="card-title">element cards</p>
							<p>Buy unique chemical Elements cards for yourself. Sell them for a higher price and earn 96% of their value!</p>
						</div>
					</div>
	    		</div>
	    	</div>

	    	<div className="home-section slider-section">
	    		<div className="container">
	    			<h2 className="u-text-center u-accent-primary">Find your words!</h2>
					
					<div className="slider-container">
						<Slider {...sliderSettings } className="elements-words">
							<div className="element-word">
								<ElementCard element={this.props.elements[7]} key={0} styling="simple"/>
								<ElementCard element={this.props.elements[11]} key={1} styling="simple"/>
							</div>

							<div className="element-word">
								<ElementCard element={this.props.elements[73]} key={1} styling="simple"/>
								<ElementCard element={this.props.elements[0]} key={2} styling="simple"/>
								<ElementCard element={this.props.elements[84]} key={3} styling="simple"/>
							</div>

							<div className="element-word">
								<ElementCard element={this.props.elements[91]} key={1} styling="simple"/>
								<ElementCard element={this.props.elements[27]} key={2} styling="simple"/>
								<ElementCard element={this.props.elements[26]} key={3} styling="simple"/>
								<ElementCard element={this.props.elements[85]} key={4} styling="simple"/>
							</div>

							<div className="element-word">
								<ElementCard element={this.props.elements[41]} key={1} styling="simple"/>
								<ElementCard element={this.props.elements[9]} key={2} styling="simple"/>
								<ElementCard element={this.props.elements[38]} key={3} styling="simple"/>
							</div>
						</Slider>
					</div>
	   
					<p>Collect elements which can create words!</p>
	    		</div>
	    	</div>

	    	<section className="home-section">
				<div className="container container-icons" ref="iconsContainer">

					<div className="col-6">
						<h2 className="u-text-center u-accent-primary">How does it work?</h2>
						<p>To buy a Chemical Element you have to send Ethereum through Metamask to Smart Contract. When your transaction has been completed, you are an owner of that unique element!</p>
						<br/>
						<p>Of course when you own element someone can buy it from you for increased price. If that situation will hapen you will get return on investment in Ether + some extra percentages! It is automatic so you do not have to worry about it.</p>
					</div>

					<div className="col-6 accent-icons">
						<img src={metamask_orange} alt=""/>
						<span className="plus">+</span>
						<img src={eth_orange} alt=""/>
					</div>
					
				</div>
	    	</section>

	    	<section className="home-section rule-section" style={{ backgroundImage: `url(${rule})` }}>
				<div className="container">
					<div>
						<h2 className="u-text-center">Learn and rule Periodic Table</h2>
						<p>Our goal is to popularize learning along with blockchain game. Each of element is provided with detailed description including some physical and general attributes. Do not by shy, check them out and try to rule Periodic Table!</p>

						<Link to="/laboratory" className="btn">laboratory</Link>
					</div>					
				</div>
	    	</section>
    	</div>
    	
    );
  }
}

export default Home;