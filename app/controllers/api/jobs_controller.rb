class Api::JobsController < ApplicationController
  def create
    @job = Job.new(job_params)
    @trucks = Truck.all 
    @trucks.each do |truck|
      if (truck.start <= @job.start && truck.end >= @job.end)
        # 24 hour time
        debugger
        if truck.dates.include?(@job.date)
          #do nothing
        else
          @job.truck_id = truck.id 
          truck.dates << @job.date
          truck.save!
        end
        break
      end
    end

    if @job.save!
      render :show #show
    else
      render json: ['No Trucks available in that time frame! Sorry!']
    end
  end

  def index 
    @jobs = Job.all
  end

  private
  def job_params
    params.require(:job).permit(:name, :date, :start, :end)
  end

end
