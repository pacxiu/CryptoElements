import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import Laboratory from './Laboratory';

import scientistIcon from '../../assets/icons/scientist.svg';

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			profile: this.props.match.params.id,
			ownedElements: [],
			ownedScientists: [],
			ownedSpecials: [],
			ownedPeriodic: [],
			ownedTokens: 0,
			profileError: null
		}

		this.renderAccountCards = this.renderAccountCards.bind(this);
	}

	componentDidMount() {
		this.renderAccountCards();
		window.scrollTo(0,0);
	}

	componentWillReceiveProps(nextProps) {
		const nextProfile = nextProps.match.params.id;
		const previousProfile = this.state.profile;

		if ( nextProfile === previousProfile ) { return; }

		this.setState({ profile: nextProfile }, this.renderAccountCards );
	}

	renderAccountCards() {
		const { elements, scientists, specials, contract, web3 } = this.props;
		const { profile } = this.state;
		const _this = this;

		if ( contract == null ) {
			setTimeout(function() {
				_this.renderAccountCards();
			}, 500 );
			return "";
		}

		if ( !web3.utils.isAddress(profile) ) {
			_this.setState({ profileError: true });
			return;
		} else {
			_this.setState({ profileError: false });
		}

		contract.methods.tokensOfOwner(profile).call( function(err, data) {
			const cards = data;
			let ownedElements = [];
			let ownedScientists = [];
			let ownedSpecials = [];
			let ownedPeriodic = [];

			for( let i = 0; i < cards.length; i++) {
				const cardId = cards[i];

				if (cardId === "0") {
					ownedPeriodic.push(cardId);
				} else if ( cardId < 1001 ) {
					ownedElements.push(elements[cardId - 1]);
				} else if ( cardId < 10001) {
					ownedScientists.push(scientists[cardId - 1001]);
				} else {
					ownedSpecials.push(specials[cardId - 10001]);
				}
			}

			_this.setState({ ownedPeriodic, ownedElements, ownedScientists, ownedSpecials, ownedTokens: cards.length });
			return data;
		});

		return "";
	}

	render() {
		const { profile, ownedPeriodic, ownedElements, ownedScientists, ownedSpecials, ownedTokens, profileError } = this.state;
		let ownedTokensText = "cards";
		let owner = false;
		let checkAccount = (<p className="own-cards"></p>);
		let etherscanLink = `https://etherscan.io/address/${profile}`;

		if ( profileError == null ) {
			return (
				<div className="container">
					Loading...
				</div>
			)
		}

		if ( profileError ) {
			return (
				<div className="container">
					It seems that provided address is not valid ethereum address!
				</div>
			)
		}

		if ( ownedTokens.length === 1 ) {
			ownedTokensText = "card";
		}

		let accountColor = `#${profile.substr(profile.length - 6)}`;

		if ( profile === this.props.account ) {
			checkAccount = (
				<p className="own-cards">
					Hey! Looks like you are browsing through own cards. If you want to change price of your cards click <span className="u-accent-primary">'Modify Price'</span> button. However, you can not set it to higher price than the current price!
				</p>
			);

			owner = true;
		}

		return (
			<div id="profile-site" className="container u-overflow">
				<div className="profile-details">
					<div className="attribute-icon" style={{ borderColor: accountColor }}>
						<ReactSVG path={scientistIcon} style={{ fill: accountColor }}/>
					</div>
					<div>
						<strong className="nickname">{ profile }</strong>
						<a target="_blank" rel="noopener noreferrer" href={etherscanLink} className="linker">Show address on etherscan</a>
					</div>
				</div>
				
				<p>This scientist owns <span className="u-accent-primary">{ownedTokens}</span> {ownedTokensText}</p>
				{ checkAccount }

				<Laboratory {...this.props } getContractTokens={this.props.getContractTokens} elements={ownedElements} scientists={ownedScientists} specials={ownedSpecials} marketItemType="element" checkPeriodic={true} periodic={ownedPeriodic} owner={owner}/>
			</div>
		);
	}
}
