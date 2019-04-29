import * as JobApiUtil from '../util/job_api_util'


export const RECEIVE_JOB = 'RECEIVE_JOB'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'
export const RECEIVE_JOB_ERRORS = 'RECEIVE_JOB_ERRORS'

const receiveJobs = jobs => {
  return({
    type: RECEIVE_JOBS,
    jobs
  })

}
const receiveJob = job => {
  return({
    type: RECEIVE_JOB,
    job
  })
}

const receiveJobErrors = error => {
  return({
    type: RECEIVE_JOB_ERRORS,
    error
  })
}

export const createJob = job => dispatch => {
  return JobApiUtil.createJob(job)
    .then(job => dispatch(receiveJob(job))),
    err => {
      dispatch(receiveJobErrors(err.responseJSON))
    }
}

export const fetchJobs = () => dispatch => {
  return JobApiUtil.fetchJobs()
    .then(jobs => dispatch(receiveJobs(jobs))),
    err => {
      dispatch(receiveJobErrors(err.responseJSON))
    }
}

export const fetchJob = (id) => dispatch => {
  return JobApiUtil.fetchJob(id)
    .then(job => dispatch(receiveJob(job))),
    err => {
      dispatch(receiveJobErrors(err.responseJSON))
    }
}