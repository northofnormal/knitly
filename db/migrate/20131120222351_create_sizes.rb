class CreateSizes < ActiveRecord::Migration
  def change
    create_table :versions do |t|
      t.integer :pattern_id
      t.string :version
    end
  end
end