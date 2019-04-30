import React from 'react'

class TruckIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.start = this.props.truck.start.slice(11, 16)
    this.end = this.props.truck.end.slice(11, 16)

    this.jobFilter = this.jobFilter.bind(this);
  }

  jobFilter(){
    let filteredResults = [];
    for(let i = 0; i < this.props.jobs.length; i++){
      if (this.props.truck.id === this.props.jobs[i].truck_id){
        filteredResults << this.props.job[i];
      }
    }
    return filteredResults;
  }

  render(){

    // let filteredJobs = this.jobFilter();
    let filteredJobs = Object.values(this.props.jobs);
    debugger
    return(
      <div>
        <div>{`Truck Name: ${this.props.truck.name} assignments`}</div>
        {filteredJobs.map( job => 
          <JobInfo truck={this.props.truck} job={job} />)}
        
        {/* <div>{`Customer Booked from ${this.start} until ${this.end}`}</div> */}
      </div>
    )
  }
}


class JobInfo extends React.Component {
  constructor(props){
    super(props)

  }
  render(){
    return(
      <div>
        <div>Job Name: {this.props.job.name}, Booked from {this.props.job.start.slice(11, 16)} to {this.props.job.end.slice(11, 16)}</div>
      </div>
    )
  }
}

export default TruckIndexItem