import { connect } from 'react-redux';
import TruckIndex from './truck_index'
import {fetchTrucks} from '../../actions/truck_actions'
import {fetchJobs} from '../../actions/job_actions'

const mapStateToProps = (state) => {
  return({
    state: state
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTrucks: () => dispatch(fetchTrucks()),
    fetchJobs: () => dispatch(fetchJobs()),
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(TruckIndex)
