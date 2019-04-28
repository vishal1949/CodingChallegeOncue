class TrucksController < ApplicationController
  def create 
    @truck = Truck.create(truck_params)
    if @truck.save
      render :index
    else
      render json: ['Error! Did not create truck']
  end

  def index
    @trucks = Truck.all
  end

  private 
  def truck_params
    params.require(:truck).permit(:name, :start, :end)
  end
end
