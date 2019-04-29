import React from 'react'

class TruckForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: null,
      start: null, 
      end: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const truck = Object.assign({}, this.state);
    this.props.createTruck(truck);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    })
    
  }

  render(){
    return(
    <form onSubmit={(e) => this.handleSubmit(e)}>
      <h2>Truck Info</h2>
      <div>Name</div>
        <input type="text" value={this.state.name} onChange={this.update('name')}></input>
      <div>Start</div>
        <input type='time' value={this.state.start} onChange={this.update('start')}></input>
      <div>End</div>
        <input type='time' value={this.state.end} onChange={this.update('end')}></input>
      <input type="submit"/>
    </form>
    )
  }
}

export default TruckForm