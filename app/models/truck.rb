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
#

class Truck < ApplicationRecord
end
