import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';

import metamaskLocked from "../../../assets/metamask_locked.jpg";
import trustIcon from "../../../assets/press/trust.png";
import stateIcon from "../../../assets/press/stateofdapps.png";
import insightIcon from "../../../assets/press/dappinsight.png";
import dappRadarIcon from "../../../assets/press/dappradar.png";

export default class FAQ extends Component {
	render() {
		return (
			<div id="faq" className="container --thiner static-container">

				<h1 className="u-accent-primary">Get Started</h1>
				
				<div className="accordion-container">
					<Collapsible trigger="What do I need to use CryptoElements?" transitionTime={200} classParentString="accordion-item" >
			        	<p>To be honest, not much:</p>
			        	<ul>
			        		<li>A computer or laptop with Chrome or Firefox browser</li>
			        		<li>MetaMask, a digital wallet used specifically with web apps</li>
			        		<li>Ether in your wallet to fund your CryptoElements</li>
			        	</ul>
			    	</Collapsible>

			    	<Collapsible trigger="How do I install my digital wallet - MetaMask?" transitionTime={200} classParentString="accordion-item" >
			        	<p>To use CryptoElements, you will need to install MetaMask, a digital wallet. You will need to put money in it to make your first purchase. Follow this steps:</p>
			        	<ul>
			        		<li>Go to Metamask on <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" className="linker">Google Chrome Store</a> and click “Add to Chrome”.</li>
			        		<li>Click “Add Extension” on the pop-up.</li>
			        		<li>Create a new MetaMask wallet.</li>
			        		<li>Copy your 12 seed words and file them away somewhere safe (this helps to secure your account). Extremaly important!</li>
			        	</ul>

			        	<p>For more details. Please visit <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/" className="linker">Official&nbsp;Metamask&nbsp;Website</a></p>
			    	</Collapsible>

			    	<Collapsible trigger="Why is MetaMask locked? And how to unlock it?" transitionTime={200} classParentString="accordion-item" >
			        	<p>Sometimes, you'll see a lock screen. This happens because MetaMask locks your account after a certain period of time automatically. To unlock it simply click on the MetaMask extension and type in your password.</p>

			        	<img className="u-center-block" src={metamaskLocked} alt="Locked metamask account"/>

			        	<p>For more details. Please visit <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/" className="linker">Official&nbsp;Metamask&nbsp;Website</a></p>
			    	</Collapsible>

			    	<Collapsible trigger="How do I get ETH cryptocurrency?" transitionTime={200} classParentString="accordion-item" >
			        	<p><strong>For U.S. citizens only:</strong> you can buy ether (ETH) in MetaMask. ETH is the digital currency and database - it enables our game to run.</p>

			        	<p><strong>For everyone else:</strong> you will need to purchase ETH from an exchange (such as Coinbase, Bitstamp or similar), and then transfer the ETH from your exchange wallet to your MetaMask wallet. Unfortunately, you cannot play this dApp with only an exchange account.</p>

			        	<p>For more details. Please visit <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/" className="linker">Official&nbsp;Metamask&nbsp;Website</a></p>
			    	</Collapsible>

			    	<Collapsible trigger="How do I send ETH to MetaMask?" transitionTime={200} classParentString="accordion-item" >
			        	<p><strong>For U.S. citizens only:</strong> you are able to purchase ETH directly from the MetaMask wallet using for instance the Coinbase widget. This is more convenient and doesn’t require you to create two accounts.</p>

			        	<p><strong>For everyone else:</strong> you need to buy ETH from an exchange using normal fiat currency. Copy your MetaMask address by clicking on the large ‘...’ next to your account, then select ‘Copy Address to clipboard’. Go to your exchange, click ‘Accounts’, and select your ETH Wallet and click ‘send’. Paste the MetaMask address in the box with the amount you’d like to transfer.</p>

			        	<p>For more details. Please visit <a target="_blank" rel="noopener noreferrer" href="https://metamask.io/" className="linker">Official&nbsp;Metamask&nbsp;Website</a></p>
			    	</Collapsible>
				</div>

				<h1 className="u-accent-primary">What is CryptoElements?</h1>

				<div className="accordion-container">
					<Collapsible trigger="What is CryptoElements?" transitionTime={200} classParentString="accordion-item" >
			        	<p>Though one, huh? It is game based on buying and selling unique CryptoElements cards aka cryptocollectibles, each of them is represented by only one smart contract. This is to ensure that only one person can own "Hydrogen" Element card. After someone buys card from you earn some money! Details are to be found here - <Link to="/how-it-works" className="linker">How&nbsp;It&nbsp;Works</Link>.</p>
			        	<p>What is more, we would like to use Blockchain gaming to learn about chemical world. If someone, by playing our game will start to dive deeper into fascinating world of atoms, chemicals or chemical compounds we will be more than humbled!</p>
			    	</Collapsible>

			    	<Collapsible trigger="How can I get one of CryptoElements?" transitionTime={200} classParentString="accordion-item" >
			        	<p>Simple. Go to <Link to="/laboratory" className="linker">Laboratory</Link> and check out all available cards, if you have enough ETH in you MetaMask account just click "Buy" button under desired element. After confirmation of transaction CryptoElement belongs to you!</p>
			    	</Collapsible>

			    	<Collapsible trigger="How much does it cost to buy a CryptoElement?" transitionTime={200} classParentString="accordion-item" >
			        	<p>This depends. Starting prices of some CryptoElements begin for so low as 0.005 ETH - then the prices rises. Cards with other functionality such as Scientists and Periodic Table are more expensive because they provide additional functionality to dApp.</p>
			    	</Collapsible>

			    	<Collapsible trigger="Can I change price of my CryptoElement?" transitionTime={200} classParentString="accordion-item" >
			        	<p>Yes, you can change price of your cards. However price can't be bigger than current price and lower than starting price of considered card.</p>
			    	</Collapsible>
			    	
			    	<Collapsible trigger="What are Scientists cards?" transitionTime={200} classParentString="accordion-item" >
			        	<p>Scientists cards are representing people who were liable for discovering Elements. We tryied to assign as many Scientists cards for Elements as we could. Unfortunately for some Elements there is no correct data about discovery. As an owner of Scientist card you get 1% for every transaction occuring on Element which was discovered by given Scientist!</p>
			    	</Collapsible>

			    	<Collapsible trigger="What is Periodic Table card?" transitionTime={200} classParentString="accordion-item" >
			        	<p>Periodic Table has unique functionality in CryptoElements. Owner of this card is receiving 1% of all transactions which are occuring in this dApp! In other words - when you are in possession of this card and someone buys any Element or Scientist card you get the fee! Isn't that awesome?</p>
			    	</Collapsible>
				</div>

				<h1 className="u-accent-primary">Other</h1>

				<div className="accordion-container">
					<Collapsible trigger="Is this a scam?" transitionTime={200} classParentString="accordion-item" >
			        	<p>No this isn't a scam. It is game based on collecting new assets, which are cryptocollectibles, in this case CryptoElements. Whole logic of this dApp is included in <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x67123afd93dd99c2b7587ea506843bfd9485d95e" className="linker">Smart&nbsp;Contract</a>. We can't change it, once it was deployed on Blockchain. No one can take away yours cards without paying to you!</p>
			    	</Collapsible>

			    	<Collapsible trigger="How are you making money?" transitionTime={200} classParentString="accordion-item" >
			        	<p>We take a percentage of each transaction occuring in <Link to="/laboratory" className="linker">Laboratory</Link>. For details about our fees please visit our sub page - <Link to="/how-it-works" className="linker">How&nbsp;It&nbsp;Works</Link>. You can find there exact explanation of percentage system behind each transaction</p>
			    	</Collapsible>

			    	<Collapsible trigger="Can I see code of smart contract?" transitionTime={200} classParentString="accordion-item" >
			        	<p>Sure you can! It is visible for everyone as it is based on Ethereum Blockchain. Here is link for: <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x67123afd93dd99c2b7587ea506843bfd9485d95e" className="linker">Smart&nbsp;Contract</a></p>
			    	</Collapsible>
			    </div>

			    <h1 className="u-accent-primary">Press</h1>

			    <div className="accordion-container">
					<Collapsible trigger="Can I found your app on some dApps lists?" transitionTime={200} classParentString="accordion-item" >
			        	<p>Of course! We are listed here:</p>
			        	<div>
			        		<a className="press-icon-container" target="_blank" rel="noopener noreferrer" href="https://www.stateofthedapps.com/dapps/cryptoelements"><img src={stateIcon} alt=""/></a>
			        	</div>

			        	<div>
			        		<a className="press-icon-container" target="_blank" rel="noopener noreferrer" href="https://dappinsight.com/dapp/850/cryptoelements"><img src={insightIcon} alt=""/></a>
			        	</div>

			        	<div>
			        		<a className="press-icon-container" target="_blank" rel="noopener noreferrer" href="https://dappradar.com/app/291/cryptoelements"><img src={dappRadarIcon} alt=""/></a>
			        	</div>

			        	<p>Our app is also supported by:</p>
			        	<a className="press-icon-container" target="_blank" rel="noopener noreferrer" href="https://trustwalletapp.com/"><img src={trustIcon} alt=""/></a>
			    	</Collapsible>
			    </div>
			</div>
		);
	}
}
