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
#  truck_id   :integer
#

class Job < ApplicationRecord

  validates :name, :date, :start, :end, presence: true  
  # validates :overlap_prevention

  belongs_to :truck,
    primary_key: :id,
    foreign_key: :truck_id,
    class_name: 'Truck'

  # def availability_check
  #   Job.where.not(id: self.id).where(truck_id: self.truck_id)
  #     .where.not('start >= :end or end <= :start', start: start, end: end)
  # end

  # def overlap_prevention
  #   unless availability_check.empty?
  #     errors[:base] << 'Trucks are booked in that time frame!'
  #   end
  # end

end
