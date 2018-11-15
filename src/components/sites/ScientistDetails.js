import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import { Link } from "react-router-dom";

import ElementCard from '../partials/cards/ElementCard';
import NotFound from './static/NotFound';
import Loader from '../partials/Loader';

import scientistIcon from '../../assets/icons/scientist.svg';

export default class ScientistDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: parseInt(this.props.match.params.id, 10),
			token: {} 
		}

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		this.props.getElementData(this.state.id, "scientist");
		window.addEventListener('scroll', this.handleScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, false);
	}

	componentWillReceiveProps(nextProps) {
		const { id, token } = this.state;
		const nextId = parseInt(nextProps.match.params.id, 10);

		if ( nextId !== id ) {
			this.setState({ id: nextId });
			this.props.getElementData(nextId, "scientist");
		}

		if ( nextProps.scientists[id - 1] === token ) {
			return;
		}

		this.setState({ token: nextProps.scientists[id - 1] });
	}

	handleScroll(e) {
		const windowHeight = window.innerHeight;
		const referenceElement = ReactDOM.findDOMNode(this.refs.referenceScroll);
		const element = ReactDOM.findDOMNode(this.refs.scrollingElement);
		const elementHeight = element.clientHeight;
		const referenceElementFromTop = referenceElement.offsetTop;
		const windowScrollTop = window.scrollY;
		const triggerFixed = referenceElementFromTop - (windowHeight - elementHeight)/2;

		if (windowScrollTop > triggerFixed ) {
			element.classList.add('is-fixed');
		} else {
			element.classList.remove('is-fixed');
		}
	}
	
	render() {
		const { id, token } = this.state;
		const { contract, web3, account, getElementData, buyToken } = this.props;

		// check if scientist of given id exists,
		if ( token == null ) {
			return (
				<div className="container">
					<NotFound/>
				</div>
			);
		}

		// check if object is empty
		if ( Object.keys(token).length === 0) {
			return (
				<div className="container">
					Loading....
				</div>
			);
		}

		// destructuring element detailed data
		const { name, description, elements, link } = token;
		let { price, owner } = token;
		let profileLink = owner;
		let wikiLink = link;

		if ( price == null ) {
			price = <Loader />;
		}

		if ( wikiLink !== "") {
			wikiLink = (
				<p>For more information visit <a target="_blank" rel="noopener noreferrer" href={link} className="linker">Wikipedia - {name}</a>.</p>
			)
		}

		if ( owner == null ) {
			owner = <Loader />;
			profileLink = "";
		}

		let image = require(`../../assets/tokenImages/scientists/${id}.jpg`);

		return (
			<div id="scientist-site" className="--spacer token-site u-overflow">
				<div className="element-background">
					<div className="container">
						<div className="element-card simple" style={{ backgroundImage: `url(${image})`}}>
							<div className="shadow"></div>
						</div>
					</div>
				</div>

				<div className="container --flex" ref="referenceScroll">
					<div className="attribute-container u-text-center">
						<h1 className="attribute-name">{name}</h1>

						<p><strong className="u-accent-primary">Owner of this Scientist card receive 1% fee for each transactions with Element cards provided below.</strong></p>
						{description}
						{wikiLink}
											
						<h2 className="u-accent-primary">elements</h2>
						<div className="cards-container">
							{ elements.map((index) => 
								<ElementCard {... { contract, web3, account, getElementData, buyToken }}
									call={true} 
									element={this.props.elements[index - 1]} 
									key={index} 
								/> 
							)}
						</div>
					</div>

					<div className="owner-container" data-color="11">
						<div className="scrolling-element" ref="scrollingElement">
							<div className="attribute-icon u-text-center">
								<ReactSVG path={scientistIcon}/>
							</div>
							<div className="card-owner">owner: <Link to={`/profile/${profileLink}`}>{owner}</Link></div>						
							<div className="price">{price} ETH</div>		
							<a className="btn --inverted" href="" onClick ={ (e) => { buyToken(e, id + 1000) } } >buy</a>					
						</div>						
					</div>
									
				</div>
			</div>
		);
	}
}
