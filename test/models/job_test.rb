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

require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
