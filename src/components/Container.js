import React, { Component } from 'react';
import Card from './Card';

class Container extends Component {
	render() {
		return (
			<div className="ui container">
				{this.props.hogs.map((hog) => (
					<Card hog={hog} handleChange={this.props.handleChange}></Card>
				))}
			</div>
		);
	}
}

export default Container;
