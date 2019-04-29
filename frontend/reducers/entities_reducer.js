import { combineReducers } from 'redux';

import jobsReducer from './jobs_reducer';

const entitiesReducer = combineReducers({
  jobs: jobsReducer
});

export default entitiesReducer;