import {connect} from 'react-redux';
import TruckForm from './truck_form_component'
import {fetchTrucks, createTruck} from '../../actions/truck_actions'

const mapStateToProps = (state) => {
  
}

const mapDispatchToProps = (dispatch) => {
  return({
      createTruck: (truck) => dispatch(createTruck(truck))
    })
}

export default connect(null, mapDispatchToProps)(TruckForm);