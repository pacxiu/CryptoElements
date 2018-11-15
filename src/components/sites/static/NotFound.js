import React, { Component } from 'react';

export default class NotFound extends Component {
	render() {
		return (
			<div className="container">
				Sorry, site you're looking for is does not exists.
			</div>
		);
	}
}

export class ComingSoon extends Component {
	render() {
		return (
			<div className="container">
				Coming soon.
			</div>
		);
	}
}
