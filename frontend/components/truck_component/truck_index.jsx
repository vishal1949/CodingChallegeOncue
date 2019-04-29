import React from 'react';
import TruckIndexItem from './truck_index_item'

class TruckIndex extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    // this.props.fetchJobs();
    this.props.fetchTrucks();
  }

  render(){
    if(!this.props.state.entities.trucks){
      return null;
    }
    let truckArray = Object.values(this.props.state.entities.trucks)
    debugger
    return(
      <div>
        <div>Trucks </div>
        {truckArray.map( truck => 
        <TruckIndexItem truck={truck}/> )}
      </div>
    )
  }
}

export default TruckIndex;