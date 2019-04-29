@jobs.each do |job|
  json.set! job.id do 
    json.partial! 'jobs', job: job
  end
end