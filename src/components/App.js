import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import '../dist/normalize.css';
import '../dist/main.css';

// loading SmartContract Details + elements DB
import { ABI, CONTRACT } from './helpers';
import elements from '../data/elements';
import scientists from '../data/scientists';
import specials from '../data/special';

//**** Components
// partials
import Menu from './partials/Menu';
import Footer from './partials/Footer';
import Modal from './partials/Modal';

// sites 
import Home from './sites/Home';
import Laboratory from './sites/Laboratory';

import ElementDetails from './sites/ElementDetails';
import ScientistDetails from './sites/ScientistDetails';
import SpecialDetails from './sites/SpecialDetails';
import PeriodicTableDetails from './sites/PeriodicTableDetails';

import Profile from './sites/Profile';

// static sites
import HowItWorks from './sites/static/HowItWorks';
import FAQ from './sites/static/FAQ';
import Privacy from './sites/static/Privacy';

// not found
import NotFound from './sites/static/NotFound';

// libraries for SmartContract
import Web3 from 'web3';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			web3: null,
			account: null,
			contract: null,
			network: { current: null, expected: 1, external: true },
			elements: elements,
			scientists: scientists,
			specials: specials,
			tokensLoaded: { elements: false, scientists: false, specials: false },
			location: null,
			modalVisible: false
		};

		this.initWeb3 = this.initWeb3.bind(this);
		this.initAccountData = this.initAccountData.bind(this);
		this.initAccountAddres = this.initAccountAddres.bind(this);
		this.getContractTokens = this.getContractTokens.bind(this);
		this.getElementData = this.getElementData.bind(this);
		this.buyToken = this.buyToken.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	componentDidMount() {
		this.initWeb3();
	}

	componentDidUpdate(nextProps) {
		const currentLocation = this.state.location;
		const nextLocation = nextProps.history.location.pathname;

		if ( currentLocation !== nextLocation ) {
			this.setState({ location: nextLocation });
			window.scrollTo(0,0);
		}
	}

	initWeb3() {
		let web3 = window.web3;

		if (typeof web3 !== 'undefined') {
		  	web3 = new Web3(web3.currentProvider);
		  	this.setState({ network: {...this.state.network, external: false } });
		} else {
			web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/Fi6gFcfwLWXX6YUOnke8"));		
		}

		this.setState({ web3 }, () => this.initAccountData(web3));
	}

	initAccountData(web3) {
		const eth = web3.eth;

		this.initAccountAddres();

		// get current network
		eth.net.getId().then( (currentNetwork) => {
			let network = { ...this.state.network };
			network.current = currentNetwork;

			if ( (currentNetwork !== this.state.network.expected) && (this.state.network.external === false) ) {
				const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/Fi6gFcfwLWXX6YUOnke8"));
				this.setState({ web3, network: {...this.state.network, external: true } }, () => this.initAccountData(web3));
				return null;
			}

			this.setState({ network });
			return null;
		}).bind(this);

		// get contract
		const contract = new eth.Contract(ABI, CONTRACT);
		this.setState({ contract })
	}

	initAccountAddres() {
		const eth = this.state.web3.eth;

		// setting user account if it is different than current account
		eth.getAccounts().then( (account) => {
			if ( account[0] !== this.state.account ) {
				this.setState({ account: account[0] });
			}

			return null;
		}).bind(this);

		// checking if user switched accounts in interval
		setTimeout(() => {
			this.initAccountAddres();
		}, 5000);
	}

	// method getting all available contract tokens, updating state with prices and owners
	getContractTokens() {
		const { contract } = this.state;
		const _this = this;

		// check if contract is defined!
		if ( contract == null ) {
			setTimeout(function() {
				_this.getContractTokens();
			}, 800 );
			return;
		}

		contract.methods.getTotalElements().call( function(err, data) {
			const contractElements = elements;
		    _this.setState({ elements: contractElements });

			for (var i = 1; i <= contractElements.length ; i++) {
		        _this.getElementData(i, "element");
		    }
		});

		contract.methods.getTotalScientists().call( function(err, data) {
		    const contractScientists = scientists;
		    _this.setState({ scientists: contractScientists });
			
			for (var i = 1; i <= contractScientists.length ; i++) {
		        _this.getElementData(i, "scientist");
		    }
		});

		contract.methods.getTotalSpecials().call( function(err, data) {
			const contractSpecials = specials;
		    _this.setState({ specials: contractSpecials });

			for (var i = 1; i <= contractSpecials.length ; i++) {
		        _this.getElementData(i, "special");
		        console.log('special');
		    }
		});
	}

	// method for getting particular token data, (price, owner)
	getElementData(id, type) {
		const { contract, web3 } = this.state;

		if ( contract == null || id == null) {
			setTimeout(() => {
				this.getElementData(id, type);
			}, 800);

			return;
		}

		switch(type) {
			case "element":
  				contract.methods.getElement(id).call().then( (data) => {
					const price = web3.utils.fromWei(data.sellingPrice, "ether");
					const owner = data.owner;
					const elements = [...this.state.elements];
					
					if ( price === elements[id - 1].price ) { return; }

					elements[id - 1].owner = owner;
					elements[id - 1].price = price;			
					this.setState({ elements });
					
					if ( id === elements.length ) {
						let tokensLoaded = { ...this.state.tokensLoaded };
						tokensLoaded.elements = true;
						this.setState({ tokensLoaded });
					}
				 	
					return null;
				}).bind(this);

  				break;
  			case "scientist":
  				contract.methods.getElement(id + 1000).call().then( (data) => {
					const price = web3.utils.fromWei(data.sellingPrice, "ether");
					const owner = data.owner;
					const scientists = [...this.state.scientists];
					
					if ( price === scientists[id - 1].price ) { return; }

					scientists[id - 1].owner = owner;
					scientists[id - 1].price = price;
					
					this.setState({ scientists });

					if ( id === scientists.length ) {
						let tokensLoaded = { ...this.state.tokensLoaded };
						tokensLoaded.scientists = true;
						this.setState({ tokensLoaded });
					}

					return null;
				}).bind(this);
  				break;
  			case "special":
  				contract.methods.getElement(id + 10000).call().then( (data) => {
					const price = web3.utils.fromWei(data.sellingPrice, "ether");
					const owner = data.owner;
					const specials = [...this.state.specials];
					
					if ( price === specials[id - 1].price ) { return; }

					specials[id - 1].owner = owner;
					specials[id - 1].price = price;
					this.setState({ specials });

					if ( id === specials.length ) {
						let tokensLoaded = { ...this.state.tokensLoaded };
						tokensLoaded.specials = true;
						this.setState({ tokensLoaded });
					}

					return null;
				}).bind(this);
  				break;
  			default: 
  				break;
		}
	}

	// method for buying tokens
	buyToken(e, id) {
		e.preventDefault();
		const { contract, account, network } = this.state;

		if ( network.external ) {
			this.setState({ modalVisible: true });
			return;
		}

		contract.methods.priceOf(id).call().then( (data) =>  {
			var value = parseInt(data.toString(10), 10);
				
			contract.methods.purchase(id).send({ 
				value: value,
				from: account,
				gas: 200000
			}).on('confirmation', function(confirmationNumber, receipt) {
				// console.log(confirmationNumber, receipt);
			});
		});
	}

	closeModal() {
		this.setState({ modalVisible: false });
	}

  	render() {
  		const { account, network, elements, scientists, contract, web3, tokensLoaded, modalVisible } = this.state;

	    return (
     		<div className="--full-height">
     			<Menu {...{ account, network }} />
				
				<Switch>
		     		<Route exact path="/" render={(props) => ( <Home {...props} {...{ elements }} />)}/>

		     		<Route exact path="/laboratory" render={(props) => (
		     			<Laboratory {...props} 
		     				{...this.state} 
		     				getContractTokens={this.getContractTokens}
		     				buyToken={this.buyToken} 
		     				marketItemType="element" />)}
		     			/>

		     		<Route exact path="/laboratory/periodic" render={(props) => (
		     			<Laboratory {...props} 
		     				{...this.state} 
		     				getContractTokens={this.getContractTokens}
		     				buyToken={this.buyToken} 
		     				marketItemType="periodic" />)}
		     			/>

		     		<Route exact path="/laboratory/scientist" render={(props) => (
		     			<Laboratory {...props} 
		     				{...this.state} 
		     				getContractTokens={this.getContractTokens}
		     				buyToken={this.buyToken} 
		     				marketItemType="scientist" />)}
		     			/>

		     		<Route exact path="/laboratory/special" render={(props) => (
		     			<Laboratory {...props} 
		     				{...this.state} 
		     				getContractTokens={this.getContractTokens}
		     				buyToken={this.buyToken} 
		     				marketItemType="special" />)}
		     			/>

					
		     		<Route exact path="/elements/:id" render={(props) => ( 
		     			<ElementDetails {...props} 
		     				{...{ elements, scientists, contract, web3, account }} 
		     				getElementData={this.getElementData}
		     				buyToken={this.buyToken} /> )}
		     		/>

		     		<Route exact path="/scientists/:id" render={(props) => ( 
		     			<ScientistDetails {...props} 
		     			{...{ elements, scientists, contract, web3, account }} 
		     			getElementData={this.getElementData}
		     			buyToken={this.buyToken} />)}
		     		/>

		     		<Route exact path="/specials/:id" render={(props) => ( 
		     			<SpecialDetails {...props} 
		     			{...{ specials, contract, web3, account }}
		     			getElementData={this.getElementData}
		     			buyToken={this.buyToken} />)}
		     		/>

					<Route exact path="/periodic" render={(props) => ( 
						<PeriodicTableDetails {...props} 
						{...{ contract, web3, account }}
						buyToken={this.buyToken} />)}
					/>

					<Route exact path="/profile/:id" render={(props) => ( 
						<Profile {...props} 
						{...this.state} 
						getContractTokens={this.getContractTokens}
						buyToken={this.buyToken} />)}
					/>

					<Route exact path="/how-it-works" component={HowItWorks}/>
					<Route exact path="/faq" component={FAQ}/>
					<Route exact path="/privacy" component={Privacy}/>

					<Route component={NotFound} />
				</Switch>
				
				<Modal {...{ modalVisible }} 
					closeModal={this.closeModal}
				/>

			    <Footer {...{ account } } />
     		</div>
	    );
  	}
}

export default withRouter(App);
