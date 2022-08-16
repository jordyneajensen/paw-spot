class CreateSpots < ActiveRecord::Migration[7.0]
  def change
    create_table :spots do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.text :description
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
