require 'rails_helper'

RSpec.describe Post, type: :model do

  describe 'GET /posts' do
    it 'returns all the posts' do
      testPost = Post.new
      testPost.title = 'test title'
      testPost.intro = 'test intro'
      testPost.category_id = '3'
      testPost.user_id = '1'
      testPost.save
      testPost2 = Post.new
      testPost2.title = 'test title 2'
      testPost2.intro = 'test intro 2'
      testPost2.category_id = '3'
      testPost2.user_id = '1'
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).size).to eq(2)
    end
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
      delete 'api/posts/'
      testPost = Post.update(2, :title => 'Amazing updated Title 2')
      testPost.save
      expect(testPost.title).to eq('Amazing updated Title 2') 
    end
  end


      # describe 'POST /posts' do
  #   it 'unsuccessfully creates a new post' do
  #     testPost = Post.new
  #     testPost.title = 'test title'
  #     testPost.category_id = '3'
  #     testPost.user_id = '1'
  #     expect(testPost.title).to eq('test title') 
  #     expect(testPost.intro).to eq('test intro') 
  #     expect(testPost.category_id).to eq(3) 
  #     expect(testPost.user_id).to eq(1) 
  #   end


end
