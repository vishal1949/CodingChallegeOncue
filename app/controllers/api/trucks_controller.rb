class Api::TrucksController < ApplicationController
  def create 
    @truck = Truck.new(truck_params)
    if @truck.save!
      render :show
    else
      render json: ['Error! Did not create truck']
    end
  end

  def index
    @trucks = Truck.all
  end

  private 
  def truck_params
    params.require(:truck).permit(:name, :start, :end)
  end
end
