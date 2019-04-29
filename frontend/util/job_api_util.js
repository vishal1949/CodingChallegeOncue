export const createJob = (job) => {
  return(
    $.ajax({
      method: 'post',
      url: 'api/jobs',
      data: { job }
    })
  )
}

export const fetchJob = (id) => {
  return(
    $.ajax({
      method: 'get',
      url: `api/jobs/${id}`
    })
  )
}
