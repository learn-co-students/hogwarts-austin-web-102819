import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import Container from './Container';
import Filter from './Filter';
import Sort from './Sort';

class App extends Component {
	constructor() {
		super();
		this.state = {
			hogs: hogs,
			filters: { type: 'all' },
			sort: 'none'
		};
	}
	updateFilter = (e) => {
		this.setState({
			filters: { type: e.target.value }
		});
	};

	filterHogs = () => {
		let data;
		if (this.state.filters.type === 'all') {
			data = hogs;
		} else if (this.state.filters.type === 'true') {
			data = hogs.filter((hog) => hog.greased === true);
		} else if (this.state.filters.type === 'false') {
			data = hogs.filter((hog) => hog.greased === false);
		}
		this.setState({
			hogs: data
		});
	};

	sortHogs = () => {
		let data;
		if (this.state.sort === 'none') {
			data = this.state.hogs;
		} else if (this.state.sort === 'name') {
			data = this.state.hogs.sort(function(a, b) {
				var nameA = a.name.toUpperCase();
				var nameB = b.name.toUpperCase();
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			});
		} else if (this.state.sort === 'weight') {
			data = this.state.hogs.sort((a, b) => a.weight - b.weight);
		}
		this.setState({ hogs: data });
	};

	updateSort = (e) => {
		this.setState({
			sort: e.target.value
		});
	};

	render() {
		return (
			<div className="App">
				<Nav />
				<Filter updateFilter={this.updateFilter} filterHogs={this.filterHogs} />
				<Sort updateSort={this.updateSort} sortHogs={this.sortHogs} />
				<Container hogs={this.state.hogs} />
			</div>
		);
	}
}

export default App;
