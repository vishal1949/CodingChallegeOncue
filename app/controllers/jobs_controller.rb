class JobsController < ApplicationController
  def create
    @job = Job.new(job_params)
    if @job.save
      render :show
    else
      render json: ['Trucks are booked in that time frame! Sorry']
  end

  private
  def job_params
    params.require(:job).permit(:name, :date, :start, :end)
  end

end
