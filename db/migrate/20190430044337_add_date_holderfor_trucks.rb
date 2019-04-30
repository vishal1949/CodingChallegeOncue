class AddDateHolderforTrucks < ActiveRecord::Migration[5.2]
  def change
    add_column :trucks, :dates, :string, array: true, default: []
  end
end
