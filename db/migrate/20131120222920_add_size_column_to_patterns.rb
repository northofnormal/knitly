class AddSizeColumnToPatterns < ActiveRecord::Migration
  def change
    add column :size
  end
end
