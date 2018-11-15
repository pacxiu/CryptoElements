import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Loader from "../Loader";

export default class ElementCard extends Component {
	constructor(props) {
		super(props);
		const element = this.props.element;

		this.state = {
			token: (element || null),
			id: (element.id || null),
			modifyPrice: (parseFloat(element.price) || "")
		}

		this.initTokenData = this.initTokenData.bind(this);
		this.modifyTokenPrice = this.modifyTokenPrice.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
	}

	componentDidMount() {	
		this.initTokenData();
	}

	// checking if token received newProps and updating
	componentWillReceiveProps(nextProps) {
		const { token } = this.state;
		const element = nextProps.element;

		if ( element === token ) { return; }

		this.setState({ token: element, id: element.id, modifyPrice: parseFloat(element.price) });
	}

	// init data for token if visited site is not Laboratory 
	// to not load whole blockchain data from App.js
	initTokenData() {
		if ( this.props.call && this.state.id != null ) {
			this.props.getElementData(this.state.id, "element");
		} else {
			setTimeout(() => {
				this.initTokenData();
			}, 800);
		}
	}

	modifyTokenPrice(e, id) {
		e.preventDefault();

		const { contract, web3 } = this.props;
		const _this = this;

		const modifiedPrice = web3.utils.toWei(this.state.modifyPrice, 'ether');

		contract.methods.modifyTokenPrice(id, modifiedPrice).send({ 
			from: _this.props.account,
			gas: 200000
		}).on('confirmation', function(confirmationNumber, receipt) {
			console.log(confirmationNumber, receipt);
		});
	}

	handlePriceChange(e) {
		this.setState({ modifyPrice: e.target.value });
	}

	render() {
		const { token, modifyPrice } = this.state;
		const { id, name, symbol, general } = token;
		let { price, owner } = token;
		let profileLink = owner;
		let modifyButton = "";

		if ( price == null ) {
			price = <Loader />;
		}

		if ( owner == null ) {
			owner = <Loader />;
			profileLink = "";
		}

		if ( token == null ) {
			return (
				<div className="">Loading</div>
			);
		}
		
		if ( this.props.styling === "simple" ) {
			return (
				<div className="element-card simple">
					<p className="element-number">{ id }</p>
					<p className="element-symbol">{ symbol }</p>
					<p className="element-name">{ name }</p>
					<div className="shadow"></div>
				</div>
			);
		}

		if ( this.props.owner ) {
			modifyButton = (
				<div className="modify-container">
					<div className="--flex">
						<input step="any" type="number" value={modifyPrice} onChange={this.handlePriceChange}/> ETH
					</div>
					<a className="btn --inverted" href="" onClick ={ (e) => { this.modifyTokenPrice(e, id) } } >Modify Price</a>
				</div>		
			)
		}

		return (
			<div className="card-container">
				<div className="token-card" data-color={general.category}>
					<div className="token-name">{name}</div>

					<Link to={`/elements/${id.toString()}`} className="token-image">
						<p className="element-number">{id}</p>
						<p className="element-symbol">{symbol}</p>
						<p className="element-name">{name}</p>
						<div className="overlay">
							<div className="btn --inverted">See more</div>
						</div>
					</Link>
					
					<div className="token-price">
						<div className="price">{price} ETH</div>

						<a className="btn --inverted" href="" onClick ={ (e) => { this.props.buyToken(e, id) } } >buy</a>
					</div>
				</div>
				
				<div className="card-owner">Owner: <Link to={`/profile/${profileLink}`}>{ owner }</Link></div>
				{modifyButton}

			</div>
		);
	}
}



