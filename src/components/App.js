import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigBrowser from './PigBrowser'
import Filter from './Filter'

class App extends Component {
  constructor() {
    super()

    this.state = {
      pigs: hogs,
      filters: {
        greased: 'all',
        name: true
      }
    }
  }
  greasedPigs = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        greased: event.target.value
      }
    }
    , this.getGreasedPigs
    )
  }


  getGreasedPigs = () => {
    let allHogs = hogs
    let greased = []
    let ungreased = []

    if (this.state.filters.name === true) {allHogs = hogs.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })} else {allHogs = hogs.sort((a, b) => (a.weight > b.weight) ? 1: -1)}

    allHogs.map(pig => (pig.greased === true) ? greased.push(pig) : ungreased.push(pig))

    if (this.state.filters.greased === "all") {this.setState({pigs: hogs})} else if (this.state.filters.greased === "true") 
    {this.setState({pigs: greased})} else {this.setState({pigs: ungreased})}
  }
  alphabetical = () => {
    let name = this.state.filters.name
    this.setState({
      filters: { ...this.state.filters,
        name: (name === false) ? true : false
      }
    }, this.getGreasedPigs)
  }

  render() {
    
    return (
      <div className="App">
          < Nav />
          <Filter handleChange={this.greasedPigs} handleCheck={this.alphabetical}/>
          <PigBrowser pigs={this.state.pigs}/>
      </div>
    )
  }
}

export default App;
