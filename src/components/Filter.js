import React from 'react';

class Filter extends React.Component {
	render() {
		return (
			<div className="ui form">
				<h3>Hog type</h3>
				<div className="field">
					<select
						name="type"
						id="type"
						onChange={(event) => this.props.onChangeGrease(event)}
					>
						<option value="all">All</option>
						<option value="true">Greased</option>
						<option value="false">Non-Greased</option>
					</select>
				</div>

				<div className="field">
					<button
						onClick={this.props.onFindHogsClick}
						className="ui secondary button"
					>
						Find hogs
					</button>
				</div>
			</div>
		);
	}
}

export default Filter;
