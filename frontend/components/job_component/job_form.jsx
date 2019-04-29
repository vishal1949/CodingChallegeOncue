import React from 'react'

class JobForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      date: '',
      start: '',
      end: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const job = Object.assign({}, this.state)
    this.props.createJob(job);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return(
      <div>
        <h2>Job Info</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>Name: </div>
          <input type='text' value={this.state.name} onChange={this.update('name')}></input>
          <div>Date of Move</div>
          <input type='date' value={this.state.date} onChange={this.update('date')}></input>
          <div>Start Time:</div>
          <input type='time' value={this.state.start} onChange={this.update('start')}></input>
          <div>End Time:</div>
          <input type='time' value={this.state.end} onChange={this.update('end')}></input>
          <input type="submit"/>
        </form>
        <br />
      </div>
    )
  }
}


export default JobForm;