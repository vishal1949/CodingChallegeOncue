import React from 'react'

class TruckIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.start = this.props.truck.start.slice(11, 16)
    this.end = this.props.truck.end.slice(11, 16)
  }

  render(){
    return(
      <div>
        {`Truck ${this.props.truck.id} assignments`}
        <div>{`Customer Booked from ${this.start} until ${this.end}`}</div>
      </div>
    )
  }
}

export default TruckIndexItem