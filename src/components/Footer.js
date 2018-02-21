import React, { Component } from 'react';
import EthIcon from '../assets/icons/ethereum.png';
import MetaIcon from '../assets/icons/metamask.png';

class Footer extends Component {
  render() {
    return (
      	<footer id="footer">
			<div className="container">
				<div className="footer-links">
					<ul className="col-4"><span className="sub-title">About</span>
						<li><a href="">Home</a></li>
						<li><a href="">How</a></li>
						<li><a href="">FAQ</a></li>
						<li><a href="">Terms</a></li>
					</ul>
					<ul className="col-4"><span className="sub-title">Elements</span>
						<li><a href="">Marketplace</a></li>
						<li><a href="">MyElements</a></li>
					</ul>
					<ul className="col-4"><span className="sub-title">Support</span>
						<li><a href="">Contact</a></li>
						<li><a href="">Smart Contract</a></li>
					</ul>
				</div>
				<div className="footer-images">
					<p className="sub-title">Powered by:</p>
					<img src={EthIcon} alt="Ethereum Icon" />
					<img src={MetaIcon} alt="Metamask Icon" />
				</div>
			</div>
			<p className="container copyright u-white">&copy; {new Date().getFullYear()} CryptoElements. All rights reserved.</p>
		</footer>
    );
  }
}

export default Footer;