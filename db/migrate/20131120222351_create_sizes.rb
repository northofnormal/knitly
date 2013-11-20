class CreateSizes < ActiveRecord::Migration
  def change
    create_table :sizes do |t|
      t.integer :pattern_id
      t.string :size
    end
  end
end
