import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Loader from "../Loader";

export default class SpecialCard extends Component {
	constructor(props) {
		super(props);
		const special = this.props.special;

		this.state = {
			token: (special || null),
			id: (special.id || null),
			modifyPrice: (parseFloat(special.price) || "")
		}
	}

	render() {
		const { token, modifyPrice } = this.state;
		const { id, name } = token;
		let { price, owner } = token;
		let profileLink = owner;
		let modifyButton = "";
		const image = require(`../../../assets/tokenImages/specials/${id}.jpg`);

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

		return (
			<div className="card-container image-card">
				<div className="token-card" data-color="13">
					<div className="token-name">{ name }</div>

					<Link to={`/specials/${id.toString()}`} className="token-image" style={{ backgroundImage: `url(${image})`}}>
						<div className="overlay">
							<div className="btn --inverted">See more</div>
						</div>
					</Link>
					
					<div className="token-price">
						<div className="price">{ price } ETH</div>

						<a className="btn --inverted" href="" onClick ={ (e) => { this.props.buyToken(e, id + 10000) } } >buy</a>
					</div>
				</div>
				
				<div className="card-owner">Owner: <Link to={`/profile/${profileLink}`}>{ owner }</Link></div>

				{modifyButton}
			</div>
		);
	}
}
