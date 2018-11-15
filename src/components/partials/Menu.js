import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactSVG from 'react-svg';
import ReactTooltip from 'react-tooltip'

import logo from '../../assets/logo.svg';
import logoMobile from '../../assets/logo_icon.svg';
import networkIcon from '../../assets/icons/network.svg';

class Menu extends Component {
  	render() {
	  	let { account, network } = this.props;
	  	let accountLink;
	  	let networkStatus;
	  	let networkMsg;

	  	if ( account == null ) {
	  		account = "No account";
	  		accountLink = "";
	  	} else {
	  		accountLink = account.toString();
	  	}

	  	if ( !network.external ) {
	  		networkStatus = (<a className="network-status is-online" data-for="network" data-tip><ReactSVG path={networkIcon}/></a>	)
	  		networkMsg = "You are connected to Main Ethereum Network";
	  	} else {
	  		networkStatus = (<a className="network-status" data-for="network" data-tip><ReactSVG path={networkIcon}/></a>)
	  		networkMsg = "We connected you to Main Network with external provider. Please, install Metamask or check network.";
	  	}

	    return (
	      	<nav id="menu">        
	            <div className="container">
	            	<Link to="/" className="logo-container u-accent-primary">
						<img className="u-mobile-hide" src={logo} alt=""/>
						<img className="u-mobile-show" src={logoMobile} alt=""/>
	            	</Link>

	            	<Link to="/laboratory" className="btn --primary --inverted">
						<span className="u-mobile-hide">laboratory</span>
						<span className="u-mobile-show">lab</span>
	            	</Link>
					
					<div className="account-container u-accent-primary">
						{networkStatus}
						<ReactTooltip class="--network" id="network" place="bottom" type="light" effect="solid">
						  	{networkMsg}
						</ReactTooltip>

						<div className="dropdown">
							<span className="dropdown-toggle btn --primary --inverted">Account</span>

							<div className="dropdown-content">
								<p className="account-address">{ account }</p>
								<Link to={`/profile/${accountLink}`} className="u-accent-primary" onClick={this.handleDropdown}>My Elements</Link>
							</div>				
						</div>
					</div>
					
	            </div>
	        </nav>
	    );
	}
}

export default Menu;