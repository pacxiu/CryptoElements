import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Loader from "../Loader";

export default class SpecialCard extends Component {
	constructor() {
		super();

		this.state = {
			id: 0,
			price: null,
			owner: null,
			modifyPrice: ""
		}

		this.getElementData = this.getElementData.bind(this);
		this.modifyTokenPrice = this.modifyTokenPrice.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
	}

	componentDidMount() {
		this.getElementData(this.state.id)
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

			this.setState({ price, owner, modifyPrice: parseFloat(price) });
		}).bind(this);
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
		let { id, price, owner, modifyPrice } = this.state;
		const image = require(`../../../assets/tokenImages/periodic.jpg`);
		let profileLink = owner;
		let modifyButton = "";

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
					<a className="btn --inverted" href="" onClick ={ (e) => { this.modifyTokenPrice(e, id) } } >Modify Price</a>
				</div>		
			)
		}

		return (
			<div className="card-container">
				<div className="token-card image-card" data-color="12">
					<div className="token-name">Periodic Table</div>

					<Link to="/periodic" className="token-image" style={{ backgroundImage: `url(${image})`}}>
						<div className="overlay">
							<div className="btn --inverted">See more</div>
						</div>
					</Link>
					
					<div className="token-price">
						<div className="price">{price} ETH</div>

						<a className="btn --inverted" href="" onClick ={ (e) => { this.props.buyToken(e, id) } } >buy</a>
					</div>
				</div>
				
				<div className="card-owner">Owner: <Link to={`/profile/${profileLink}`}>{owner}</Link></div>
				{modifyButton}
			</div>
		);
	}
}
