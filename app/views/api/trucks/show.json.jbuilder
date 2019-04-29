json.set! @truck.id do 
  json.extract! @truck, :name, :start, :end
end