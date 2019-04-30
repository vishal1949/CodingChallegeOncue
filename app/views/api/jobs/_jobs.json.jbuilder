# Json.set! job, :id, :name, :date, :start, :end 
json.extract! job, :id, :name, :date, :start, :end ,:truck_id

#   json.extract! @job, :name, :date, :start, :end
# end