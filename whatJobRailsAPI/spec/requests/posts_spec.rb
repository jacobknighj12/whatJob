require 'rails_helper'

RSpec.describe "Posts", type: :request do
  describe 'GET /posts' do
    it 'returns all the posts' do
      testPost = Post.new
      testPost.title = 'test title 2'
      testPost.intro = 'test intro 2'
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
    it 'creates a new post' do
      expect {
        post '/api/posts', params: {post: {title: 'test title', intro: 'test intro', category_id: '3', user_id: '1'} }
      }.to change { Post.count }.from(0).to(1)
      expect(response).to have_http_status(:created)
      
      
      
      
      
      # testPost = Post.new
      # testPost.title = 'test title'
      # testPost.intro = 'test intro'
      # testPost.category_id = '3'
      # testPost.user_id = '1'
      # testPost.save
      # testPost2 = Post.new
      # testPost2.title = 'test title 2'
      # testPost2.intro = 'test intro 2'
      # testPost2.category_id = '3'
      # testPost2.user_id = '1'
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).size).to eq(2)
    end
  end


end
