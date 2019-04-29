import {RECEIVE_JOB} from '../actions/job_actions'

const jobReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_JOB:
      return Object.assign({}, state, {[action.job.id]: action.job});
    default:
      return state;
  }
}

export default jobReducer;