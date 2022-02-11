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
        ['user[email]', email],
        ['user[password]', password],
        ['user[password_confirmation]', password]
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

    def generate_random_email(prefix = 'jane')
      "#{prefix}_#{rand(1..9_999_999)}@gmail.com"
    end

    def get_bearer_token(response)
      response.header['Authorization']
    end

      #failure
      describe 'POST /users/sign_in' do
        # it 'returns a 302 when you are not logged in if no bearer token provided' do          
        #   url = URI("#{APP_URI}/users/sign_in")
        #   http = Net::HTTP.new(url.host, url.port);
        #   request = Net::HTTP::Get.new(url)
        #   response = http.request(request)
        #   code = response.code
        #   expect(code).to eq('302')
        # end
        

        it 'allows access to a user with a valid bearer token' do
          email = generate_random_email
          password = "12345678"
          create_user(email, password)
          response = sign_in(email, password)
          bearer_token = get_bearer_token(response)
          response = users(bearer_token)
          expect(response.code).to eq('200')
        end
      end

      describe 'POST /users' do
        it 'creates a new user and returns a 200 code' do
          response = create_user(generate_random_email, "12345678")
          code = response.code
          expect(code).to eq('200')
        end
      end

      describe 'POST /users/sign_in' do
        it 'creates a bearer token' do
          email = generate_random_email
          password = "12345678"
          create_user(email, password)
          response = sign_in(email, password)
          expect(response.code).to eq('200')
          expect(response.header['Authorization']).to match(/Bearer */)
        end
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



# require 'rspec'
# require "uri"
# require "net/http"
# APP_URI = 'http://localhost:3000/api'


# require "uri"
# require "net/http"

# Rspec.describle "API" do
#   it 'returns successfully signed up if you provide the correct data' do

#     url = URI("localhost:3000/api/users")
#     http = Net::HTTP.new(url.host, url.port);
#     request = Net::HTTP::Post.new(url)
#     form_data = [['email', 'NewUser11@test.com'],['password', 'password1'],['password_confirmation', 'password1'],['first_name', 'Jo'],['last_name', 'Joyce']]
#     request.set_form form_data, 'multipart/form-data'
#     response = http.request(request)
#     puts response.code
#     expect 
#   end

#   it 'returns a 302 when the user is not logged in and no bearer token provided' do
  
#     url = URI("localhost:3000/api/users/sign_in")

#     http = Net::HTTP.new(url.host, url.port);
#     request = Net::HTTP::Get.new(url)
#     request.set_form form_data, 'multipart/form-data'
#     response = http.request(request)
    
#     code = response.code
#     expect(code).to eq('302')
#   end


#   it 'returns 302 when  the user must be logged in to edit user details' do
  
#     url = URI("localhost:3000/api/users/edit")

#     http = Net::HTTP.new(url.host, url.port);
#     request = Net::HTTP::Get.new(url)
#     request.set_form form_data, 'multipart/form-data'
#     response = http.request(request)
#     puts response.read_body
#   end


#   it 'successfully logs in' do
#     require "uri"
#     require "net/http"

#     # Ask about how to creat the sign up to make this work
#     url = URI("localhost:3000/api/users/sign_in")

#     http = Net::HTTP.new(url.host, url.port);
#     request = Net::HTTP::Post.new(url)
#     form_data = [['user[email]', 'alex2@test.com'],['user[password]', 'password1']]
#     request.set_form form_data, 'multipart/form-data'
#     response = http.request(request)
#     puts response.read_body

#   end

 
  
#   it 'successfully logs out' do

#   url = URI("localhost:3000/api/users/sign_out")

#     http = Net::HTTP.new(url.host, url.port);
#     request = Net::HTTP::Delete.new(url)
#     request["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjQ0MzI3ODU1LCJleHAiOjE2NDQzMzE0NTUsImp0aSI6ImE5MmJjNzM2LWViNTQtNDFlMC1iODIxLWU4MmYzNGM2ZWI5NSJ9.fmgETrhLRlm5_JB4OUUAoIdl3dEx2p-ztVb2MDFkRTk"
#     form_data = []
#     request.set_form form_data, 'multipart/form-data'
#     response = http.request(request)
#     puts response.read_body
#   end
# end

#   it 'successfully updates user details' do
#     require "uri"
#     require "net/http"

#     url = URI("localhost:3000/api/users")

#     http = Net::HTTP.new(url.host, url.port);
#     request = Net::HTTP::Patch.new(url)
#     request["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNyIsInNjcCI6InVzZXIiLCJhdWQiOm51bGwsImlhdCI6MTY0NDMyODAyOSwiZXhwIjoxNjQ0MzMxNjI5LCJqdGkiOiJhMTM3ZjI2OS1lYTAzLTQ0ZTEtYTU1MS1jYzc3OTAxYTRmZWEifQ.XUoW2R92FpeDhLUxQZ-NVItrjtPu0wqRE1sENIfEnis"
#     form_data = [['email', 'NewUserChanged2@test.com']]
#     request.set_form form_data, 'multipart/form-data'
#     response = http.request(request)
#     puts response.read_body
#   end





# end





# # def create_user(email, password)
# #   it 'returns successfully signed up if you provide the correct data' do

# #     url = URI("localhost:3000/api/users")
# #     http = Net::HTTP.new(url.host, url.port);
# #     request = Net::HTTP::Post.new(url)
# #     form_data = [['email', 'NewUser11@test.com'],['password', 'password1'],['password_confirmation', 'password1'],['first_name', 'Jo'],['last_name', 'Joyce']]
# #     request.set_form form_data, 'multipart/form-data'
# #     response = http.request(request)
# #     puts response.read_body
# #   end
# # end






# # def member_data(bearer_token)
# #   url = URI("#{APP_URI}/users/edit")

# #   http = Net::HTTP.new(url.host, url.port);
# #   request = Net::HTTP::Get.new(url)
# #   request["Authorization"] = bearer_token
# #   http.request(request)
# # end

# # # def create_user(email, password)
# # #   url = URI("#{APP_URI}/users")

# # #   http = Net::HTTP.new(url.host, url.port);
# # #   request = Net::HTTP::Post.new(url)
# # #   form_data = [
# # #     ['user[email]', email],
# # #     ['user[password]', password]
# # #     ['user[password_confirmation]', password]
# # #   ]
# # #   request.set_form form_data, 'multipart/form-data'
# # #   http.request(request)
# # end

# # def sign_in(email, password)
# #   url = URI("#{APP_URI}/users/sign_in")

# #   http = Net::HTTP.new(url.host, url.port);
# #   request = Net::HTTP::Post.new(url)
# #   form_data = [
# #     ['user[email]', email],
# #     ['user[password]', password]
# #     ['user[password_confirmation]', password]
# #   ]
# #   request.set_form form_data, 'multipart/form-data'
# #   http.request(request)
# # end

# # RSpec.describe "API" do
# #   describe 'GET /member-data' do
# #     it 'returns a 302 when you are not logged in if no bearer token provided' do
# #       url = URI("#{APP_URI}/users/edit")
# #       http = Net::HTTP.new(url.host, url.port);
# #       request = Net::HTTP::Get.new(url)
# #       response = http.request(request)
# #       code = response.code
# #       expect(code).to eq('302')
# #     end

# #     it 'allows access to a user with a valid bearer token' do
# #       email = "bob3_#{rand(1..1_000_000)}@gmail.com"
# #       password = "12345678"
# #       password_confirmation = "12345678"
# #       create_user(email, password)
# #       response = sign_in(email, password)
# #       bearer_token = response.header['Authorization']
# #       response = member_data(bearer_token)
# #       expect(response.code).to eq('200')
# #     end
# #   end

# #   describe 'POST /users' do
# #     it 'creates a new user and returns a 200 code' do
# #       response = create_user("bob3_#{rand(1..1_000_000)}@gmail.com", "12345678", "12345678")
# #       code = response.code
# #       expect(code).to eq('200')
# #     end
# #   end

# #   describe 'POST /users/sign_in' do
# #     it 'creates a bearer token' do
# #       email = "bob3_#{rand(1..1_000_000)}@gmail.com"
# #       password = "12345678"
# #       password_confirmation = "12345678"
# #       create_user(email, password)
# #       response = sign_in(email, password)
# #       expect(response.code).to eq('200')
# #       expect(response.header['Authorization']).to match(/Bearer .*/)
# #     end
# #   end
# # end