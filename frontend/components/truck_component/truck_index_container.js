import { connect } from 'react-redux';
import TruckIndex from './truck_index'
import {fetchTrucks} from '../../actions/truck_actions'

const mapStateToProps = (state) => {
  return({
    state: state
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTrucks: () => dispatch(fetchTrucks()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TruckIndex)
