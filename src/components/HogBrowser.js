import React, { Component } from 'react';
import HogCard from './HogCard';

class HogBrowser extends Component {
	state = {
		visible: false,
		hog: {}
	};

	render() {
		return (
			<div className="ui grid container">
				{this.props.hogs.map((hog) => (
					<HogCard hog={hog} />
				))}
			</div>
		);
	}
}
export default HogBrowser;
