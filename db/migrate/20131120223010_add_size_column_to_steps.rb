class AddSizeColumnToSteps < ActiveRecord::Migration
  def change
    add_column :steps, :version_id, :integer
  end
end
