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

  describe 'POST /posts' do
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
  end
  

  describe 'PUT /posts' do
    it 'updates a post' do
      testPost = Post.update(2, :title => 'Amazing updated Title 2')
      testPost.save
      expect(testPost.title).to eq('Amazing updated Title 2') 
    end
  end
     
  describe 'DELETE /posts' do
    it 'deletes a post' do
      testPost = Post.new
      testPost.title = 'test title'
      testPost.intro = 'test intro'
      testPost.category_id = '3'
      testPost.user_id = '1'
      testPost.save
      delete 'api/posts/1'
      expect(testPost.title).to eq('Amazing updated Title 2') 
    end
  end


# update this. 
  it 'deletes a post' do
    testPost = Post.create(testPost.title = 'test title', testPost.category_id = '3', testPost.user_id = '1')
    testPost.delete
    expect(Post.find(testPost.id).title).to eq(null) 
    
  end


  
end
