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
		return (
			<div className="hog-card">
				{!this.state.showDetails ? (
					<Hog
						showDetails={this.showDetails}
						name={this.props.hog.name}
						img={this.props.hog.name}
					/>
				) : (
					<HogDetails showDetails={this.showDetails} hog={this.props.hog} />
				)}
			</div>
		);
	}
}

export default HogShowcase;
