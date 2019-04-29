import {connect} from 'react-redux';
import TruckForm from './truck_form_component'
import {fetchTrucks, createTruck} from '../../actions/truck_actions'

const mapStateToProps = (state) => {
  //nothing needed for the form
}

const mapDispatchToProps = (dispatch) => {
  return({
      fetchTrucks: () => dispatch(fetchTrucks()),
      createTruck: (truck) => dispatch(createTruck(truck))
    })
}

export default connect(null, mapDispatchToProps)(TruckForm)