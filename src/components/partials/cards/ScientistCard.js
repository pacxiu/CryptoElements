import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Loader from "../Loader";

export default class ScientistCard extends Component {
	constructor(props) {
		super(props);
		const scientist = this.props.scientist;

		this.state = {
			token: (scientist || null),
			id: (scientist.id || null),
			modifyPrice: (parseFloat(scientist.price) || "")
		}

		this.initTokenData = this.initTokenData.bind(this);
		this.modifyTokenPrice = this.modifyTokenPrice.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
	}

	componentDidMount() {	
		this.initTokenData();
	}

	// init data for token if visited site is not Laboratory 
	// to not load whole blockchain data from App.js
	initTokenData() {
		if ( this.props.call && this.state.id != null ) {
			this.props.getElementData(this.state.id, "scientist");
		} else {
			setTimeout(() => {
				this.initTokenData();
			}, 800);
		}
	}

	// checking if token received newProps and updating
	componentWillReceiveProps(nextProps) {
		const { token } = this.state;
		const scientist = nextProps.scientist;
		
		if ( scientist === token ) { return; }

		this.setState({ token: scientist, id: scientist.id, modifyPrice: parseFloat(scientist.price) });
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
		const { id, name } = token;
		let { price, owner } = token;
		let profileLink = owner;
		let modifyButton = "";
		const image = require(`../../../assets/tokenImages/scientists/${id}.jpg`);

		if ( price == null ) {
			price = <Loader />;
		}

		if ( owner == null ) {
			owner = <Loader />;
			profileLink = "";
		}

		if ( this.props.owner ) {
			modifyButton = (
				<div className="modify-container">
					<div className="--flex">
						<input step="any" type="number" value={modifyPrice} onChange={this.handlePriceChange}/> ETH
					</div>
					<a className="btn --inverted" href="" onClick ={ (e) => { this.modifyTokenPrice(e, id + 1000) } } >Modify Price</a>
				</div>		
			)
		}

		// if ( token == null ) {
		// 	return (
		// 		<div className="">Loading</div>
		// 	);
		// }

		return (
			<div className="card-container image-card">
				<div className="token-card" data-color="11">
					<div className="token-name">{ name }</div>

					<Link to={`/scientists/${id.toString()}`} className="token-image" style={{ backgroundImage: `url(${image})`}}>
						<div className="overlay">
							<div className="btn --inverted">See more</div>
						</div>
					</Link>
					
					<div className="token-price">
						<div className="price">{ price } ETH</div>

						<a className="btn --inverted ${loading}" href="" onClick ={ (e) => { this.props.buyToken(e, id + 1000) } } >buy</a>
					</div>
				</div>
				
				<div className="card-owner">Owner: <Link to={`/profile/${profileLink}`}>{ owner }</Link> </div>
				{modifyButton}
			</div>
		);
	}
}
