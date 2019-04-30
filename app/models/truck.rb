# == Schema Information
#
# Table name: trucks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  start      :time             not null
#  end        :time             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  dates      :string           default([]), is an Array
#

class Truck < ApplicationRecord
  validates :name, :start, :end, presence: true

  has_many :jobs,
    primary_key: :id,
    foreign_key: :truck_id,
    class_name: 'Job'
end
