# == Schema Information
#
# Table name: jobs
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  date       :date             not null
#  start      :time             not null
#  end        :time             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Job < ApplicationRecord

  validates :name, :date, :start, :end, presence: true  

  belongs_to :truck 

end
