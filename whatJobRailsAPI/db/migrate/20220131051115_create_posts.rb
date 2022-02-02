class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :intro, null: false
      t.string :day_to_day
      t.string :career_path
      t.decimal :expected_salary_range_from
      t.decimal :expected_salary_range_to
      t.decimal :difficulty
      t.string :job_security
      t.string :industry_growth
      t.string :work_life_balance
      t.decimal :upvotes
      t.decimal :downvotes
      t.string :role_details
      t.string :job_description

      t.timestamps
    end
  end
end
