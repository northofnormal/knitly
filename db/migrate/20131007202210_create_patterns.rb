class CreatePatterns < ActiveRecord::Migration
  def change
    create_table :patterns do |t|
      t.string :title
      t.text :description
      t.string :gauge
      t.string :needles
      t.string :yarn

      t.timestamps
    end
  end
end
