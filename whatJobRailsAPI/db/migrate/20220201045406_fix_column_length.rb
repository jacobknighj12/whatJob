class FixColumnLength < ActiveRecord::Migration[6.0]
  def change
              
        change_column :posts, :role_details, :text, :length => 2000
        change_column :posts, :job_description, :text, :length => 2000
      end

end
