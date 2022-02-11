require 'rspec'
require "uri"
require "net/http"
require 'json'
APP_URI = 'http://localhost:3000/api'


def users(bearer_token)     
    url = URI("/users/sign_in")

    http = Net::HTTP.new(url.host, url.port);
    request = Net::HTTP::Get.new(url)
    request["Authorization"] = bearer_token
    http.request(request)

end


def sign_in(email, password)
    url = URI("#{APP_URI}/users/sign_in")

    http = Net::HTTP.new(url.host, url.port);
    request = Net::HTTP::Post.new(url)
    form_data = [
      ['user[email]', email],
      ['user[password]', password]
    ]
    request.set_form form_data, 'multipart/form-data'
    http.request(request)
  end
  
  def get_bearer_token(response)
    response.header['Authorization']
  end
RSpec.describe "Get Posts" do
    it 'returns HTTP status success on posts' do
        url = URI("#{APP_URI}/posts/")

        http = Net::HTTP.new(url.host, url.port);
        request = Net::HTTP::Get.new(url)

        response = http.request(request)
        expect(response.code).to eq('200')
    end
    
    it 'returns all posts' do
        url = URI("#{APP_URI}/posts/")

        http = Net::HTTP.new(url.host, url.port);
        request = Net::HTTP::Get.new(url)

        response = http.request(request)
        # puts response.read_body

        expect(response.body).to include "title"
        expect(response.body).to include "intro"
        expect((JSON.parse(response.body)['id'.to_i]).count).to_not eq(1)
    end
end

RSpec.describe "Gets a single Post" do
    it 'returns HTTP status success on post 1' do
            url = URI("#{APP_URI}/posts/1")
    
            http = Net::HTTP.new(url.host, url.port);
            request = Net::HTTP::Get.new(url)
    
            response = http.request(request)
            
            expect(response.code).to eq('200')
        end
    
    it 'returns Post 1' do
        url = URI("#{APP_URI}/posts/1")
        http = Net::HTTP.new(url.host, url.port);
        request = Net::HTTP::Get.new(url)
        response = http.request(request)
        expect(JSON.parse(response.body)['id']).to eq(1)
        expect((JSON.parse(response.body)['id'.to_i]).count).to eq(1)
    end


    it "returns an error if the post does not exist" do
            url = URI("#{APP_URI}/posts/999")
    
            http = Net::HTTP.new(url.host, url.port);
            request = Net::HTTP::Get.new(url)
    
            response = http.request(request)
            expect(response.code).to eq('404')
        end

    


    end



RSpec.describe "Creates a new Post" do
    # it 'returns HTTP status success on post 1' do
    #         url = URI("#{APP_URI}/posts/1")
    
    #         http = Net::HTTP.new(url.host, url.port);
    #         request = Net::HTTP::Get.new(url)
    
    #         response = http.request(request)
    #         expect(response.code).to eq('200')
    #     end
    
    # it 'returns Post 1' do
    #     require "uri"
    #     require "net/http"
    #     url = URI("#{APP_URI}/posts/1")
    #     http = Net::HTTP.new(url.host, url.port);
    #     request = Net::HTTP::Get.new(url)
    #     response = http.request(request)
    #     expect(JSON.parse(response.body)['id']).to eq(1)
    #     expect((JSON.parse(response.body)['id'.to_i]).count).to eq(1)
    # end


    it "returns an error if the post does not exist" do
        email = "alex2@test.com"
        password = "password1"
        response = sign_in(email, password)
        bearer_token = get_bearer_token(response)
        response = users(bearer_token)
        url = URI("#{API_URL}/api/posts")
        http = Net::HTTP.new(url.host, url.port);
        request = Net::HTTP::Post.new(url)
        request["Authorization"] = bearer_token
        form_data = [['category_id', '3'],['title', 'Another new TitleAnother'],['intro', 'Another new Intro'],['day_to_day', 'This is day to day'],['career_path', 'This is career path'],['expected_salary_range_to', '20000']]
        request.set_form form_data, 'multipart/form-data'
        response = http.request(request)
    end

    


    end

    