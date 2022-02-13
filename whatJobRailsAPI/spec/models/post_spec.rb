require 'rails_helper'

RSpec.describe Post, type: :model do



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


end
