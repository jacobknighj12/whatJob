class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :intro
      t.string :day_to_day
      t.string :career_path
      t.int :expected_salary_range_from
      t.int :expected_salary_range_to
      t.int :difficulty
      t.string :job_security
      t.string :industry_growth
      t.int :upvotes
      t.int :downvotes
      t.string :role_destription
      t.string :job_description

      t.timestamps
    end
  end
end
