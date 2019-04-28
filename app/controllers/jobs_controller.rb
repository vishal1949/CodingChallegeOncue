class JobsController < ApplicationController
  def create
    @job = Job.create!(job_params)
    if @listings.save
      render :show
    else
      render json: ['Error. Did not create job!']
  end

  private
  def job_params
    params.require(:job).permit(:name, :date, :start, :end)
  end

end
