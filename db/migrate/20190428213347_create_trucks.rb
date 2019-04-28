class CreateTrucks < ActiveRecord::Migration[5.2]
  def change
    create_table :trucks do |t|
      t.string :name, null: false
      t.time :start, null: false
      t.time :end, null: false
      t.timestamps
    end
  end
end
