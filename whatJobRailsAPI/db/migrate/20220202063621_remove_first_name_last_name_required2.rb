class RemoveFirstNameLastNameRequired2 < ActiveRecord::Migration[6.0]
  def up
    change_column_null(:users, :first_name, true, "No First Name")
    change_column_null(:users, :last_name, true, "No Last Name")
  end
  
  def down
    change_column_null(:users, :first_name, false, "No First Name")
    change_column_null(:users, :last_name, false, "No Last Name")
  end
  
end
