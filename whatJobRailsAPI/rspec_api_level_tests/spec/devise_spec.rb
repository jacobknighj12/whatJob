require 'rspec'
require "uri"
require "net/http"
require 'json'
APP_URI = 'http://localhost:3000/api'


RSpec.describe "API" do

  describe 'POST /users/sign_in' do
      def users(bearer_token)
        url = URI("#{APP_URI}/users/sign_in")
        http = Net::HTTP.new(url.host, url.port);
        request = Net::HTTP::Get.new(url)
        request["Authorization"] = bearer_token
        http.request(request)

    end

    def create_user(email, password)
      url = URI("#{APP_URI}/users")

      http = Net::HTTP.new(url.host, url.port);
      request = Net::HTTP::Post.new(url)
      form_data = [
        ['users[email]', email],
        ['users[password]', password],
        ['users[password_confirmation]', password]
      ]
      request.set_form form_data, 'multipart/form-data'
      http.request(request)
    end

    def sign_in(email, password)
      url = URI("#{APP_URI}/users/sign_in")

      http = Net::HTTP.new(url.host, url.port);
      request = Net::HTTP::Post.new(url)
      form_data = [
        ['users[email]', email],
        ['users[password]', password]
      ]
      request.set_form form_data, 'multipart/form-data'
      http.request(request)
    end

    def generate_random_email(prefix = 'jane')
      "#{prefix}_#{rand(1..9_999_999)}@gmail.com"
    end

    def get_bearer_token(response)
      response.header['Authorization']
    end
     

        it 'allows access to a user with a valid bearer token' do
          email = generate_random_email
          password = "12345678"
          create_user(email, password)
          response = sign_in(email, password)
          bearer_token = get_bearer_token(response)
          response = users(bearer_token)
          expect(response.code).to eq('200')
        end
      


      describe 'GET /users/sign_in' do
        it 'returns how to log in' do
          url = URI("#{APP_URI}/users/sign_in")
          http = Net::HTTP.new(url.host, url.port)
          request = Net::HTTP::Get.new(url)
          response = http.request(request)
          expect(JSON.parse(response.read_body)).to eq({"error" => "API only logins supported. Use POST /users"})
        end
      end
  end
end


