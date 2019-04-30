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

require 'test_helper'

class TruckTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
