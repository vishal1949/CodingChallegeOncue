import React from 'react';
import TruckIndexItem from './truck_index_item'

class TruckIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchJobs();
    this.props.fetchTrucks();
  }


  render(){
    if(this.props.state.entities.jobs === {}){
      return null;
    }
    let truckArray = Object.values(this.props.state.entities.trucks)
    let jobsArray = Object.values(this.props.state.entities.jobs)
    return(
      <div>
        <div>Trucks </div>
        {truckArray.map( truck => 
          <TruckIndexItem truck={truck} jobs={jobsArray}/> )}
      </div>
    )
  }
}

export default TruckIndex;