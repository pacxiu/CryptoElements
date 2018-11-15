import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import logoIcon from '../../assets/logo_icon.svg';

export default class Loader extends Component {
	render() {
		return (
			<div className="loader"></div>
		);
	}
}

export class LoaderMarket extends Component {
	render() {
		return (
			<div className="loader-market">
				<div>
					<ReactSVG path={logoIcon}/>
					<p className="u-accent-primary">Loading...</p>
				</div>
			</div>
		);
	}
}
