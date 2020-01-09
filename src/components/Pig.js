import React from 'react'

class Pig extends React.Component {
    constructor() {
        super()
        this.state = {
            flipped: false
        }
    }

    changeState = () => {
        (this.state.flipped === false) ? 
        
         this.setState({flipped: true}) : this.setState({flipped: false})
        
    }

  render() {
    return (
        <div className="pigTile" onClick={this.changeState}>
            {(this.state.flipped === false) ? <div><h3>{this.props.pig.name}</h3> 
            <img src={`http://localhost:3000/hog-imgs/${this.props.pig.name.split(' ').join('_')}.jpg`} alt=""/></div>
             : <div><p>Weight: {this.props.pig.weight}</p><p>Specialty: {this.props.pig.specialty}</p><p>Highest Medal Achieved: {this.props.pig['highest medal achieved']}</p></div>}
            
          </div>


    )
  }
}

export default Pig