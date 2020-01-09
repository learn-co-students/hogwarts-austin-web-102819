import React, { Component } from 'react';

class Filter extends Component {
	render() {
		return (
			<div className="ui form">
				<div className="field">
					<select onChange={this.props.updateFilter} name="type" id="type">
						<option value="all">All</option>
						<option value="true">Greased</option>
						<option value="false">Ungreased</option>
					</select>
				</div>
				<div className="field">
					<button
						onClick={this.props.filterHogs}
						className="ui secondary button"
					>
						Filter Pigs
					</button>
				</div>
			</div>
		);
	}
}

export default Filter;
