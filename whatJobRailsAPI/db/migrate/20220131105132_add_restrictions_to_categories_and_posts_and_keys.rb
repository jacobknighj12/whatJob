class AddRestrictionsToCategoriesAndPostsAndKeys < ActiveRecord::Migration[6.0]
  def change
    # change_column :posts, :title, limit: 50
    # change_column :posts, :intro, limit: 300
    # change_column :posts, :day_to_day, limit: 300
    # change_column :posts, :day_to_day, limit: 300
    # change_column :posts, :career_path, limit: 300
    # change_column :posts, :expected_salary_range_from, :decimal, precision: 15
    # change_column :posts, :expected_salary_range_to, :decimal, precision: 15
    # change_column :posts, :difficulty, :decimal, precision: 2

    # change_column :posts, :industry_growth, :decimal, limit: 30   
    # change_column :posts, :work_life_balance, precision: 2

    # change_column :posts, :upvotes, :decimal, precision: 6
    # change_column :posts, :downvotes, :decimal, precision: 6
    
    # change_column :posts, :role_details, limit: 2000
    # change_column :posts, :job_description, limit: 2000


    add_reference :posts, :categories, null:false, foreign_key: true
  end
end
