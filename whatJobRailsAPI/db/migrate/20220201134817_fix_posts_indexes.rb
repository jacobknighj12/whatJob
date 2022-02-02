class FixPostsIndexes < ActiveRecord::Migration[6.0]
  def change
    rename_column  :posts, :categories_id, :category_id
    rename_column  :posts, :users_id, :user_id
  end
end
