class FixColumnLength < ActiveRecord::Migration[6.0]
  def change
    def up
      def change
              
        change_column :posts, :role_details, :text, :length => 2000
        change_column :posts, :job_description, :text, :length => 2000
      end
    end
      def down
        
        change_column :posts,:role_details, :string, :length => 2000
        change_column :posts, :job_description, :string, :length => 2000
    
      end
  end
end
