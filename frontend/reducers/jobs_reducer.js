import {RECEIVE_JOB, RECEIVE_JOBS} from '../actions/job_actions'

const jobReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_JOB:
      return Object.assign({}, state, {[action.job.id]: action.job});
    case RECEIVE_JOBS:
      return action.jobs;
    default:
      return state;
  }
}

export default jobReducer;