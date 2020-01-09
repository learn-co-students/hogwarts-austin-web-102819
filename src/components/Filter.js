import React from 'react'

class Filter extends React.Component {
  render() {
    return (
        <div className="field">
        <select onChange={event => this.props.handleChange(event)} name="greased" id="greased">
          <option value="all">All</option>
          <option value="true">Greased</option>
          <option value="false">Ungreased</option>
        </select>
        <p>Alphabetical   <input type="checkbox" onChange={this.props.handleCheck}/></p>
        <p>Weight   <input type="checkbox" onChange={this.props.handleCheque}/></p>
    </div>


    ) 
  }
}

export default Filter


