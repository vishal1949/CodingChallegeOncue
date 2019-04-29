export const createTruck = truck => {
  return(
    $.ajax({
      method: 'post',
      url: 'api/trucks',
      data: { truck },
    })
  )
}

export const fetchTrucks = () => {
  return(
    $.ajax({
      method: 'get',
      url: 'api/trucks'
    })
  )
}