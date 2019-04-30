import React from 'react'

class TruckIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.start = this.props.truck.start.slice(11, 16)
    this.end = this.props.truck.end.slice(11, 16)
    // this.state = {
    //   update: ''
    // }
    this.jobFilter = this.jobFilter.bind(this);
  }

  jobFilter(){
    let filteredResults = [];
    for(let i = 0; i < this.props.jobs.length; i++){
      if (this.props.truck.id === this.props.jobs[i].truck_id){
        filteredResults.push(this.props.jobs[i]) ;
      }
    }
    return filteredResults;
  }

  // componentWillUpdate(nextProps, nextState){
  //   if(nextProps.jobs.length !== this.props.jobs.length){
  //     this.setState({
  //       update: nextProps.jobs.length 
  //       //need to change this and save filterdresults in state,
  //       //that will cause a rerender
  //     })
  //   }
  // }

  render(){
    if (this.props.jobs.length < 1 && !this.props.truck){
      return null;
    }
    let filteredJobs = this.jobFilter();
    return(
      <div>
        <h3>{`Truck Name: ${this.props.truck.name} assignments`}</h3>
        {filteredJobs.map( job => 
          <JobInfo truck={this.props.truck} job={job} />)}
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
        <div>Job Name: {this.props.job.name}, Booked from {this.props.job.start.slice(11, 16)} to {this.props.job.end.slice(11, 16)} on {this.props.job.date}</div>
      </div>
    )
  }
}

export default TruckIndexItem