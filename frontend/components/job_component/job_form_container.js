import {connect} from 'react-redux';
import {createJob, fetchJob} from '../../actions/job_actions'
import JobForm from './job_form'

const mapStateToProps = (state) => {
  //nothing needed to pass down
}

const mapDispatchToProps = dispatch => {
  return({
    createJob: (job) => dispatch(createJob(job)),
    fetchJob: (id) => dispatch(fetchJob(id)),
  })
}

export default connect(null, mapDispatchToProps)(JobForm);