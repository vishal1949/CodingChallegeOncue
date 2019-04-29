class Api::JobsController < ApplicationController
  def create
    @job = Job.new(job_params)
    @trucks = Truck.all 
    @trucks.each do |truck|
      if truck.start <= @job.start && truck.end >= @job.end 
        # 24 hour time
        @job.truck_id = truck.id 
        break
      end
    end

    if @job.save!
      render :show
    else
      render json: ['No Trucks available in that time frame! Sorry!']
    end
  end

  private
  def job_params
    params.require(:job).permit(:name, :date, :start, :end)
  end

end
