import React, { Component } from 'react';
import EthIcon from '../../assets/icons/ethereum.png';
import MetaIcon from '../../assets/icons/metamask.png';
import { Link } from "react-router-dom";
import ReactSVG from 'react-svg';

import twitterIcon from '../../assets/icons/social/twitter.svg';
import discordIcon from '../../assets/icons/social/discord.svg';
import facebookIcon from '../../assets/icons/social/facebook.svg';

class Footer extends Component {
  render() {
  	let { account } = this.props;
	  	let accountLink = "";

	  	if ( account == null ) {
	  		account = "No account";
	  		accountLink = "";
	  	} else {
	  		accountLink = account.toString();
	  	}

    return (
      	<footer id="footer">
			<div className="container">
				<div className="footer-links">
					<ul className="col-4"><span className="sub-title">About</span>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/how-it-works">How It Works</Link></li>
						<li><Link to="/faq">FAQ</Link></li>
						<li><Link to="/privacy">Privacy Policy</Link></li>
					</ul>
					<ul className="col-4"><span className="sub-title">Elements</span>
						<li><Link to="/laboratory">Laboratory</Link></li>
						<li><Link to={`/profile/${accountLink}`} >My Elements</Link></li>
					</ul>
					<ul className="col-4"><span className="sub-title">Support</span>
						<li><a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x67123afd93dd99c2b7587ea506843bfd9485d95e" className="linker">Smart Contract</a></li>
						<li className="social-icon">
							<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/CryptoElements/"  className="link-facebook"><ReactSVG path={facebookIcon}/> </a>
						</li>
						<li className="social-icon">
							<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/CryptoElements"  className="link-twitter"> <ReactSVG path={twitterIcon}/></a>
						</li>
						<li className="social-icon">
							<a target="_blank" rel="noopener noreferrer" href="https://discord.gg/FqK9sR2"   className="link-discord"><ReactSVG path={discordIcon}/></a>
						</li>
					</ul>
				</div>
				<div className="footer-images">
					<p className="sub-title">Powered by:</p>
					<a target="_blank" rel="noopener noreferrer" href="https://ethereum.org/"><img src={EthIcon} alt="Ethereum Icon" /></a>
					<a target="_blank" rel="noopener noreferrer" href="https://metamask.io/"><img src={MetaIcon} alt="Metamask Icon" /></a>
				</div>
			</div>
			<p className="container copyright u-white u-accent-primary">&copy; {new Date().getFullYear()} CryptoElements. All rights reserved.</p>
		</footer>
    );
  }
}

export default Footer;