import React, { Component } from 'react';

class Sort extends Component {
	render() {
		return (
			<div className="ui form">
				<div className="field">
					<select onChange={this.props.updateSort}>
						<option value="none">None</option>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</div>
				<div className="field">
					<button onClick={this.props.sortHogs} className="ui secondary button">
						Sort pigs
					</button>
				</div>
				<br></br>
			</div>
		);
	}
}

export default Sort;
