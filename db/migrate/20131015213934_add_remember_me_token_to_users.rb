class AddRememberMeTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :remember_me_token, :string, :default => nil
  end
end
