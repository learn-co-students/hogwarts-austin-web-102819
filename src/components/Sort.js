import React, { Component } from 'react';

class Sort extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="ui form">
				<h3>Sort By</h3>
				<div className="field">
					<select
						name="sort"
						id="sort"
						onChange={(event) => this.props.onSortSelect(event)}
					>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</div>

				<div className="field">
					<button
						onClick={this.props.onSortClick}
						className="ui secondary button"
					>
						Sort By
					</button>
				</div>
			</div>
		);
	}
}

export default Sort;
