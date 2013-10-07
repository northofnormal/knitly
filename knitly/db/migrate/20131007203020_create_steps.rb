class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.integerorder :pattern_id
      t.text :action
      t.string :position

      t.timestamps
    end
  end
end
