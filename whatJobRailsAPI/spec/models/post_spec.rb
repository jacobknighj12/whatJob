require 'rails_helper'

RSpec.describe Post, type: :model do

  it 'successfully creates a new post' do
    testPost = Post.new
    testPost.title = 'test title'
    testPost.intro = 'test intro'
    testPost.category_id = '3'
    testPost.user_id = '1'
    expect(testPost.title).to eq('test title') 
    expect(testPost.intro).to eq('test intro') 
    expect(testPost.category_id).to eq(3) 
    expect(testPost.user_id).to eq(1) 
  end


  # # None of the below work
  # it 'unsuccessfully creates a new post' do
  #   testPost = Post.new
  #   testPost.title = 'test title'
  #   testPost.category_id = '3'
  #   testPost.user_id = '1'
  #   expect(testPost.title).to eq('test title') 
  #   expect(testPost.intro).to eq('test intro') 
  #   expect(testPost.category_id).to eq(3) 
  #   expect(testPost.user_id).to eq(1) 
  # end
  
# DB Schema
# create_table "posts", force: :cascade do |t|
#   t.string "title", null: false
#   t.text "intro", null: false
#   t.text "day_to_day"
#   t.text "career_path"
#   t.decimal "expected_salary_range_from"
#   t.decimal "expected_salary_range_to"
#   t.decimal "difficulty"
#   t.text "job_security"
#   t.text "industry_growth"
#   t.text "work_life_balance"
#   t.decimal "upvotes"
#   t.decimal "downvotes"
#   t.text "role_details"
#   t.text "job_description"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.bigint "category_id", null: false
#   t.bigint "user_id", null: false
#   t.index ["category_id"], name: "index_posts_on_category_id"
#   t.index ["user_id"], name: "index_posts_on_user_id"
# end



  # .update doesn't work, and I'm confused because I can't seem to call on any particular post to update it? As the IDs are within the DB itself and not accessible to Rails? 
  # it 'updates a post' do
  #   testPost = Post.update(2, :title => 'Amazing updated Title 2')
  #   testPost.save
  #   expect(testPost.title).to eq('Amazing updated Title 2') 
  # end

  # # Not sure how to call a post? Help please

  # it 'deletes a post' do
  #   testPost = Post.update(2, :title => 'Amazing updated Title 2')
  #   testPost.save
  #   expect(testPost.title).to eq('Amazing updated Title 2') 
  # end


  
end
