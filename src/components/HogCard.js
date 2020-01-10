import React, { Component } from 'react';
import Hog from './Hog';
import HogDetails from './HogDetails';

class HogShowcase extends Component {
	constructor() {
		super();
		this.state = { showDetails: false };
	}

	showDetails = () => {
		const shown = !this.state.showDetails;
		this.setState({
			showDetails: shown
		});
		console.log(this.state.showDetails);
	};

	render() {
		const { name, specialty, weight, greased } = this.props.hog;
		return !this.state.showDetails ? (
			<div onClick={this.showDetails}>
				<Hog name={name} img={name} />
			</div>
		) : (
			<div onClick={this.showDetails}>
				<HogDetails hog={this.props.hog} />
			</div>
		);
	}
}

export default HogShowcase;
