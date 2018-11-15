import React, { Component } from 'react';
import SpecialCard from '../partials/cards/SpecialCard';
import NotFound, { ComingSoon } from './static/NotFound';

export default class SpecialDetails extends Component {
	render() {
		const id = this.props.match.params.id;
		const special = this.props.specials[id - 1];

		// check if scientist of given id exists
		if ( special === undefined ) {
			return (
				<ComingSoon/>
			);
		}

		// destructuring element detailed data
		const { name } = special;

		return (
			<div id="special-site">
				<ComingSoon/>
			</div>
		);
	}
}
