class RemoveFirstNameLastNameRequired < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :first_name, :string
    change_column :users, :last_name, :string
  end
end
