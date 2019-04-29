import { combineReducers } from 'redux';

import jobsReducer from './jobs_reducer';
import truckReducer from './trucks_reducer';

const entitiesReducer = combineReducers({
  jobs: jobsReducer,
  trucks: truckReducer
});

export default entitiesReducer;