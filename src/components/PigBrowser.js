import React from 'react'

import Pig from './Pig'

class PigBrowser extends React.Component {
  render() {
    return (<div className="ui grid container">
    {this.props.pigs.map(pig => <Pig key={pig.name} pig={pig}/>)}
    </div>)
  }
}

export default PigBrowser