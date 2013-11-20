class AddSizeColumnToSteps < ActiveRecord::Migration
  def change
    add column :size_id
  end
end
