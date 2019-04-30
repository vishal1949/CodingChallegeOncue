import React from 'react';
import TruckIndexItem from './truck_index_item'
const finePrint = {fontSize: '12px', margin: '10px' }

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
        <h2>Trucks </h2>
        {truckArray.map( truck => 
          <TruckIndexItem truck={truck} jobs={jobsArray}/> )}
        <div style={finePrint}>*Please refresh page to see updated index!</div>
      </div>
    )
  }
}

export default TruckIndex;