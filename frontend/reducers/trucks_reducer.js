import { RECEIVE_TRUCK, RECEIVE_TRUCKS} from '../actions/truck_actions';

const truckReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TRUCK:
      return Object.assign({}, state, {[action.truck.id]: action.truck});
    case RECEIVE_TRUCKS:
      return action.trucks;
    default:
      return state;
  }
}

export default truckReducer;