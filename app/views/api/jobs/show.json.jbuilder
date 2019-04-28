json.set! @job.id do 
  json.extract! @job, :name, :date, :start, :end
end