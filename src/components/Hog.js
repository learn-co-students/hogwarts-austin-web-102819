import React from 'react';

class Hog extends React.Component {
	searchImg = (name) => {
		const imageSrc = name
			.toLowerCase()
			.split(' ')
			.join('_');
		return `./hog-imgs/${imageSrc}.jpg`;
	};

	render() {
		return (
			<div className="card">
				<div className="content">
					<div className="header">{this.props.name}</div>
					<img
						src={this.searchImg(this.props.name)}
						alt={this.props.name}
					></img>
				</div>
			</div>
		);
	}
}

export default Hog;
