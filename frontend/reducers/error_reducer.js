import { combineReducers } from 'redux';

import jobErrorsReducer from './jobs_error_reducer';

const errorsReducer = combineReducers({
  job: jobErrorsReducer,
});

export default errorsReducer;
