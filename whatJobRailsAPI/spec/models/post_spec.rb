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

  it 'unsuccessfully creates a new post' do
    testPost = Post.new
    testPost.title = 'test title'
    testPost.category_id = '3'
    testPost.user_id = '1'
    expect(testPost.title).to eq('test title') 
    expect(testPost.intro).to eq('test intro') 
    expect(testPost.category_id).to eq(3) 
    expect(testPost.user_id).to eq(1) 
    expect(testpost.isvalid?).to eq(false)
  end
  



  it 'updates a post' do
    testPost = Post.create(testPost.title = 'test title', testPost.category_id = '3', testPost.user_id = '1')
    testPost.update(title: 'Amazing updated Title 2')
    expect(Post.find(testPost.id).title).to eq('Amazing updated Title 2') 
  end


# update this. 
  it 'deletes a post' do
    testPost = Post.create(testPost.title = 'test title', testPost.category_id = '3', testPost.user_id = '1')
    testPost.delete
    expect(Post.find(testPost.id).title).to eq(null) 
    
  end


  
end
