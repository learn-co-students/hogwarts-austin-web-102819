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

        <select onChange={event => this.props.handleCheck(event)} name="alpha" id="alpha">
          <option value="alpha">Alphabetize</option>
          <option value="weight">Weight</option>
        </select>
    </div>


    ) 
  }
}

export default Filter


