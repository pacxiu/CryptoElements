import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import { Link } from "react-router-dom";

import Loader from '../partials/Loader';

import scientistIcon from '../../assets/icons/scientist.svg';

export default class PeriodicDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: 0,
			price: null,
			owner: null
		}

		this.handleScroll = this.handleScroll.bind(this);
		this.getElementData = this.getElementData.bind(this);
	}

	componentDidMount() {
		this.getElementData(this.state.id)

		window.addEventListener('scroll', this.handleScroll, false);
	}

	getElementData(id) {
		const { contract, web3 } = this.props;

		if ( contract == null ) {
			setTimeout(() => {
				this.getElementData(id);
			}, 800);
			return;
		}

		contract.methods.getElement(id).call().then( (data) => {
			const price = web3.utils.fromWei(data.sellingPrice, "ether");
			const owner = data.owner;

			this.setState({ price, owner });
		}).bind(this);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, false);
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
		let { id, price, owner } = this.state;
		let profileLink = owner;

		if ( price == null ) {
			price = <Loader />;
		}

		if ( owner == null ) {
			owner = <Loader />;
			profileLink = "";
		}

		let image = require(`../../assets/tokenImages/periodic.jpg`);

		return (
			<div id="periodic-site" className="--spacer token-site u-overflow">
				<div className="element-background">
					<div className="container">
						<div className="element-card simple" style={{ backgroundImage: `url(${image})`}}>
							<div className="shadow"></div>
						</div>
					</div>
				</div>

				<div className="container --flex" ref="referenceScroll">
					<div className="attribute-container u-text-center">
						<h1 className="attribute-name">Periodic Table</h1>
						
						<div className="periodic-description">
							<p><strong className="u-accent-primary">Owner of this card receive 1% fee for each transactions occuring in whole Crypto&nbsp;Elements&nbsp;marketplace!</strong></p>
							
							<p>The periodic table is a tabular arrangement of the chemical elements, ordered by their atomic number, electron configuration, and recurring chemical properties, whose adopted structure shows periodic trends. Generally, within one row (period) the elements are metals on the left, and non-metals on the right, with the elements having similar chemical behaviours being placed in the same column. Table rows are commonly called periods and columns are called groups. Six groups have accepted names as well as assigned numbers: for example, group 17 elements are halogens; and group 18 are noble gases. Also displayed are four simple rectangular areas or blocks associated with the filling of different atomic orbitals.</p>

							<p>Importantly, the organization of the periodic table can be utilized to derive relationships between various element properties, but also predicted chemical properties and behaviours of undiscovered or newly synthesized elements. Russian chemist Dmitri Mendeleev was first to publish a recognizable periodic table in 1869, developed mainly to illustrate periodic trends of the then-known elements. He also predicted some properties of unidentified elements that were expected to fill gaps within this table. Most of his forecasts proved to be correct. Mendeleev's idea has been slowly expanded and refined with the discovery or synthesis of further new elements and by developing new theoretical models to explain chemical behaviour. The modern periodic table now provides a useful framework for analyzing chemical reactions, and continues to be widely adopted in chemistry, nuclear physics and other sciences.</p>

							<p>All elements ranging from atomic numbers 1 <Link to="/elements/1" className="linker">(Hydrogen)</Link> to 118 <Link to="/elements/118" className="linker">(Oganesson)</Link> have been either discovered or synthesized, completing the first seven rows of the periodic table. The first 94 elements exist naturally, although some are found only in trace amounts and were synthesized in laboratories before being found in nature. Atomic numbers for elements 95 to 118 have only been synthesized in laboratories or nuclear reactors. Synthesis of elements having higher atomic numbers are still being pursued. Numerous synthetic radionuclides of naturally occurring elements have also been produced in laboratories.</p>

							<p>For more information visit <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Periodic_table" className="linker">Wikipedia - Periodic Table</a></p>
						</div>
					</div>

					<div className="owner-container" data-color="12">
						<div className="scrolling-element" ref="scrollingElement">
							<div className="attribute-icon u-text-center">
								<ReactSVG path={scientistIcon}/>
							</div>
							<div className="card-owner">owner: <Link to={`/profile/${profileLink}`}>{ owner }</Link></div>						
							<div className="price">{ price } ETH</div>		
							<a href="" className="btn --inverted" onClick ={ (e) => { this.props.buyToken(e, id) } }>buy</a>						
						</div>						
					</div>
									
				</div>
			</div>
		);
	}
}
