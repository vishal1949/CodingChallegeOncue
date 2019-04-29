import * as truckApiUtil from '../util/truck_api_util'

export const RECEIVE_TRUCK = 'RECEIVE_TRUCK'
export const RECEIVE_TRUCKS = 'RECEIVE_TRUCKS'

const receiveTruck = truck => {
  return({
    type: RECEIVE_TRUCK,
    truck
  })
}
const receiveTrucks = trucks => {
  return({
    type: RECEIVE_TRUCKS,
    trucks
  })
}

export const fetchTrucks = () => dispatch => {
  return truckApiUtil.fetchTrucks()
    .then(trucks => dispatch(receiveTrucks(trucks)))
}

export const createTruck = (truck) => dispatch => {
  return truckApiUtil.createTruck(truck)
    .then(truck => dispatch(receiveTruck(truck)))
}