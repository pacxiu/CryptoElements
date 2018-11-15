import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import ElementCard from '../partials/cards/ElementCard';
import ScientistCard from '../partials/cards/ScientistCard';
import NotFound from './static/NotFound';
import Loader from '../partials/Loader';

// icons for details
// state
import gasIcon from '../../assets/icons/gas.svg';
import liquidIcon from '../../assets/icons/liquid.svg';
import solidIcon from '../../assets/icons/solid.svg';
import unknownIcon from '../../assets/icons/unknown.svg';

// occurance
import primordialIcon from '../../assets/icons/primordial.svg';
import decayIcon from '../../assets/icons/decay.svg';
import syntheticIcon from '../../assets/icons/synthetic.svg';

// temperatures
import meltingIcon from '../../assets/icons/melting.svg';
import boilingIcon from '../../assets/icons/boiling.svg';
import sublimationIcon from '../../assets/icons/sublimation.svg';

import weightIcon from '../../assets/icons/weight.svg';
import discoverIcon from '../../assets/icons/discover.svg';
import scientistIcon from '../../assets/icons/scientist.svg';

export default class ElementDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: parseInt(this.props.match.params.id, 10),
			token: {} 
		}

		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		this.props.getElementData(this.state.id, "element");
		window.addEventListener('scroll', this.handleScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, false);
	}

	componentWillReceiveProps(nextProps) {
		const { id, token } = this.state;

		if ( nextProps.elements[id - 1] === token ) {
			return;
		}

		this.setState({ token: nextProps.elements[id - 1] });
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
		const { scientists, contract, web3, account, getElementData, buyToken } = this.props;

		if ( token == null ) {
			return (
				<div className="container">
					<NotFound/>
				</div>
			);
		}

		if ( Object.keys(token).length === 0) {
			return (
				<div className="container">
					Loading....
				</div>
			);
		}

		const { name, general, physical, description, scientist } = token;
		let { price, owner } = token;
		let profileLink = owner;
		const backgroundList = ["#ff6666","#ffdead","#ffbfff","#ff99cc","#ffc0c0","#cccccc","#cccc99","#a1ffc3","#e7ff8f","#c0ffff","#e8e8e8"];

		let stateIcon;
		let occuranceIcon;

		switch(general.state) {
			case "gas":
				stateIcon = gasIcon; break;
			case "liquid":
				stateIcon = liquidIcon; break;
			case "solid":
				stateIcon = solidIcon; break;
			default:
				stateIcon = unknownIcon; break;
		}

		switch(general.occurance) {
			case "primordial":
				occuranceIcon = primordialIcon; break;
			case "decay":
				occuranceIcon = decayIcon; break;
			default:
				occuranceIcon = syntheticIcon; break;
		}

		let scientistCard;

		if ( scientist.id === null ) {
			scientistCard = "";
		} else {
			scientistCard = (
				<ScientistCard {... { contract, web3, account, getElementData, buyToken }}
					call={true} 
					scientist={scientists[scientist.id - 1]} 
				/>);
		}

		if ( price == null ) {
			price = <Loader />;
		}

		if ( owner == null ) {
			owner = <Loader />;
			profileLink = "";
		}

		return (
			<div id="element-site" className="--spacer token-site">
				<div className="element-background" style={{ backgroundColor: backgroundList[general.category] }}>
					<div className="container">
						<ElementCard element={token} key={id} styling="simple"/>
					</div>

				</div>
				
				<div className="container --flex" ref="referenceScroll">
					<div className="attribute-container u-text-center">
						<h1 className="attribute-name">{name}</h1>
						<div className="element-groups">
							<span className="u-accent-secondary"><strong>group:</strong> { general.group }</span> <span className="u-accent-secondary"><strong>period:</strong> { general.period }</span>
							<p className="u-accent-secondary"><strong>appearance:</strong> { general.appearance }</p>
						</div>
						

						<p className="attribute-origin"><strong>from:</strong> {description.origin}</p>

						<h2>Attributes</h2>

						<h3>General:</h3>

						<div className="--flex u-text-center icons-container">
							<div className="col-4">
								<div className="attribute-icon --weight">
									<ReactSVG path={weightIcon}/>
								</div>
								<strong className="u-accent-secondary">weight</strong>
								<p>{ general.weight }</p>
								<a className="tooltip" data-for="weight" data-tip style={{ backgroundImage: `url(${unknownIcon})`}}></a>
								<ReactTooltip class="--element" id="weight" place="bottom" type="light" effect="solid">
								  	Standard atomic weight, in its modern definition, it is the ratio of the average mass of atoms of an element to one unified atomic mass unit. The unified atomic mass unit, symbol u, is defined being ​1⁄12 of the mass of a carbon-12 atom.
								</ReactTooltip>
							</div>
							<div className="col-4">
								<div className="attribute-icon">
									<ReactSVG path={stateIcon}/>
								</div>
								<strong className="u-accent-secondary">state</strong>
								<p>{ general.state }</p>
								<a className="tooltip" data-for="state" data-tip style={{ backgroundImage: `url(${unknownIcon})`}}></a>
								<ReactTooltip class="--element" id="state" place="bottom" type="light" effect="solid">
								  	State at STP, which is defined as a temperature of 273.15&nbsp;K (0&nbsp;°C, 32&nbsp;°F) and an absolute pressure of exactly 105&nbsp;Pa (100&nbsp;kPa, 1&nbsp;bar)
								</ReactTooltip>
							</div>
							<div className="col-4">
								<div className="attribute-icon --occurance">
									<ReactSVG path={occuranceIcon}/>
								</div>
								<strong className="u-accent-secondary">occurance</strong>
								<p>{ general.occurance }</p>
								<a className="tooltip" data-for="occurance" data-tip style={{ backgroundImage: `url(${unknownIcon})`}}></a>
								<ReactTooltip class="--element" id="occurance" place="bottom" type="light" effect="solid">
								  	Describes if element can be found naturally (primordial), by synthesis or by decay from other elements.
								</ReactTooltip>
							</div>		
						</div>

						<h3>Physical:</h3>

						<div className="--flex u-text-center icons-container">
							<div className="col-4">
								<div className="attribute-icon --melting">
									<ReactSVG path={meltingIcon}/>
								</div>
								<strong className="u-accent-secondary">melting temperature</strong>
								<p>{ physical.melting } &deg;C</p>
								<a className="tooltip" data-for="melting" data-tip style={{ backgroundImage: `url(${unknownIcon})`}}></a>
								<ReactTooltip class="--element" id="melting" place="bottom" type="light" effect="solid">
								  	Provides information about temperature when element is changing it's state (phase) from solid to liquid. 
								</ReactTooltip>
							</div>
							<div className="col-4">
								<div className="attribute-icon --boiling">
									<ReactSVG path={boilingIcon}/>
								</div>
								<strong className="u-accent-secondary">boiling temperature</strong>
								<p>{ physical.boiling } &deg;C</p>
								<a className="tooltip" data-for="boiling" data-tip style={{ backgroundImage: `url(${unknownIcon})`}}></a>
								<ReactTooltip class="--element" id="boiling" place="bottom" type="light" effect="solid">
								  	Provides information about temperature when element is changing it's state (phase) from liquid to gas. 
								</ReactTooltip>
							</div>
							<div className="col-4">
								<div className="attribute-icon">
									<ReactSVG path={sublimationIcon}/>
								</div>
								<strong className="u-accent-secondary">sublimation temperature</strong>
								<p>{ physical.sublimation } &deg;C</p>
								<a className="tooltip" data-for="sublimation" data-tip style={{ backgroundImage: `url(${unknownIcon})`}}></a>
								<ReactTooltip class="--element" id="sublimation" place="bottom" type="light" effect="solid">
								  	Provides information about temperature when element is changing it's state (phase) from solid to gas, without liquid phase. 
								</ReactTooltip>
							</div>
						</div>

						<h3>Other:</h3>

						<div className="--flex u-text-center icons-container">
							<div className="col-4"></div>
							<div className="col-4">
								<div className="attribute-icon --discover">
									<ReactSVG path={discoverIcon}/>
								</div>
								<strong className="u-accent-secondary">discovered by</strong>
								<p>{scientist.name}, {scientist.year}</p>
								<a className="tooltip" data-for="scientist" data-tip style={{ backgroundImage: `url(${unknownIcon})`}}></a>
								<ReactTooltip class="--element" id="scientist" place="bottom" type="light" effect="solid">
								  	This is the person or team who discovered given element in provided year. Check out if you can find their card! 
								</ReactTooltip>
							</div>
						</div>
						<div className="u-text-center">
							{ scientistCard }
						</div>
					</div>

					<div className="owner-container" data-color={general.category}>
						<div className="scrolling-element" ref="scrollingElement">
							<div className="attribute-icon u-text-center">
								<ReactSVG path={scientistIcon}/>
							</div>
							<div className="card-owner">owner: <Link to={`/profile/${profileLink}`}>{ owner }</Link></div>						
							<div className="price">{ price } ETH</div>		
							<a href="" className="btn --inverted" onClick ={ (e) => { buyToken(e, id) } }>buy</a>						
						</div>					
					</div>
				</div>
			</div>
		);
	}
}
