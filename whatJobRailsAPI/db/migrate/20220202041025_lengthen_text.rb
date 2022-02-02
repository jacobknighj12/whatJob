class LengthenText < ActiveRecord::Migration[6.0]
  def change
    change_column :posts, :intro, :text
    change_column :posts, :day_to_day, :text
    change_column :posts, :career_path, :text
    change_column :posts, :job_security, :text
    change_column :posts, :industry_growth, :text
    change_column :posts, :work_life_balance, :text
  end
end
