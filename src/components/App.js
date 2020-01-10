import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogBrowser from './HogBrowser';
import Filter from './Filter';
import Sort from './Sort';

class App extends Component {
	constructor() {
		super();
		this.state = {
			hogs: hogs,
			grease: 'all',
			sortBy: 'name'
		};
	}

	handleChangeGrease = (event) => {
		this.setState({ grease: event.target.value });
	};

	handleSortSelect = (event) => {
		this.setState({ sortBy: event.target.value });
	};

	handleFilterHogs = () => {
		if (this.state.grease !== 'all') {
			const isGreased = this.state.grease === 'true' ? true : false;

			let filteredHogs = hogs.filter(function(hog) {
				return hog.greased === isGreased;
			});

			console.log(filteredHogs);

			this.setState({ hogs: filteredHogs });
		} else {
			this.setState({ hogs: hogs });
		}
	};

	handleSort = () => {
		console.log(this.state.sortBy);

		let sortedArray = [];
		if (this.state.sortBy === 'name') {
			sortedArray = this.state.hogs.sort(function(a, b) {
				if (a.name < b.name) return -1;
				else if (a.name === b.name) return 0;
				else return 1;
			});

			this.setState();
		} else {
			sortedArray = this.state.hogs.sort(function(a, b) {
				if (a.weight < b.weight) return -1;
				else if (a.weight === b.weight) return 0;
				else return 1;
			});
		}

		this.setState({ hogs: sortedArray });
	};

	render() {
		return (
			<div className="App">
				<Nav />
				<Filter
					onChangeGrease={this.handleChangeGrease}
					onFindHogsClick={this.handleFilterHogs}
				/>
				<Sort
					onSortSelect={this.handleSortSelect}
					onSortClick={this.handleSort}
				/>
				<HogBrowser hogs={this.state.hogs} />
			</div>
		);
	}
}
export default App;
