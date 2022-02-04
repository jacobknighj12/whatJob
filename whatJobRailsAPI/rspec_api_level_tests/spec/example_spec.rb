require 'rspec'
require "uri"
require "net/http"
APP_URI = 'http://localhost:3000'

def member_data(bearer_token)
  url = URI("#{APP_URI}/member-data")

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
    ['user[email]', email],
    ['user[password]', password]
  ]
  request.set_form form_data, 'multipart/form-data'
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

RSpec.describe "API" do
  describe 'GET /member-data' do
    it 'returns a 302 when you are not logged in if no bearer token provided' do
      url = URI("#{APP_URI}/member-data")
      http = Net::HTTP.new(url.host, url.port);
      request = Net::HTTP::Get.new(url)
      response = http.request(request)
      code = response.code
      expect(code).to eq('302')
    end

    it 'allows access to a user with a valid bearer token' do
      email = "bob3_#{rand(1..1_000_000)}@gmail.com"
      password = "12345678"
      create_user(email, password)
      response = sign_in(email, password)
      bearer_token = response.header['Authorization']
      response = member_data(bearer_token)
      expect(response.code).to eq('200')
    end
  end

  describe 'POST /users' do
    it 'creates a new user and returns a 200 code' do
      response = create_user("bob3_#{rand(1..1_000_000)}@gmail.com", "12345678")
      code = response.code
      expect(code).to eq('200')
    end
  end

  describe 'POST /users/sign_in' do
    it 'creates a bearer token' do
      email = "bob3_#{rand(1..1_000_000)}@gmail.com"
      password = "12345678"
      create_user(email, password)
      response = sign_in(email, password)
      expect(response.code).to eq('200')
      expect(response.header['Authorization']).to match(/Bearer .*/)
    end
  end
end