import React, { Component } from 'react';
class HogDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { name, specialty, weight } = this.props.hog;
		return (
			<div className="ui card" onClick={this.props.showDetails}>
				<div className="content">
					<a className="header">{name}</a>
					<div className="description">
						<p>Weight: {weight}</p>
						<p>Specialty: {specialty}</p>
						<p>
							Highest medal achieved: {this.props.hog['highest medal achieved']}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default HogDetails;
