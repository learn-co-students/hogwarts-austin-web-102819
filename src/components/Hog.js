import React from 'react';

class Hog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {},
			showDetails: false
		};
	}

	searchImg = (name) => {
		const imageSrc = name
			.toLowerCase()
			.split(' ')
			.join('_');
		return `./hog-imgs/${imageSrc}.jpg`;
	};

	hide = () => {
		this.setState({ style: { display: 'none' } });
	};

	render() {
		return (
			<div className="ui card" style={this.state.style}>
				<div class="image">
					<img
						onClick={this.props.showDetails}
						src={this.searchImg(this.props.name)}
						alt={this.props.name}
					></img>
				</div>
				<div className="content">
					<a class="header">{this.props.name}</a>
				</div>
				<div class="extra content">
					<a>
						<a onClick={this.hide}>Hide</a>
					</a>
				</div>
			</div>
		);
	}
}

export default Hog;
