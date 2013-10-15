class AddRememberMeLimitTokeToUsers < ActiveRecord::Migration
  def change
     add_column :users, :remember_me_token_expires_at, :datetime, :default => nil
  end
end
