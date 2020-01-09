import React, { Component } from 'react';

class Card extends Component {
	constructor() {
		super();
		this.state = {
			details: false
		};
	}

	flip = () => {
		let newState = !this.state.details;
		this.setState({ details: newState });
	};

	render() {
		const { name, specialty, weight, greased } = this.props.hog;
		console.log(this.props.hog);

		return this.state.details === true ? (
			<div className="pigTile" onClick={this.flip}>
				<h3>{name} </h3>
				<div className="meta">{weight}</div>
				<div className="grease">{greased}</div>
				<div className="gross">{specialty}</div>
			</div>
		) : (
			<div className="pigTile" onClick={this.flip}>
				<h3>{name} </h3>
				<br></br>
				<img
					src={`http://localhost:3000/hog-imgs/${name
						.split(' ')
						.join('_')}.jpg`}
					alt={name}
				></img>
			</div>
		);
	}
}

export default Card;
