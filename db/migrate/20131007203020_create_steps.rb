class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.integer :pattern_id
      t.integer :order
      t.text :action
      t.string :position

      t.timestamps
    end
  end
end
