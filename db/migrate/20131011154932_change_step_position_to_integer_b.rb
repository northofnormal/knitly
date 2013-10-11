class ChangeStepPositionToIntegerB < ActiveRecord::Migration
  def up
    connection.execute(%q{
      alter table steps
      alter column position
      type float using position::float
      })
  end
end
