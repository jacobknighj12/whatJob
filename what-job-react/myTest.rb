require "uri"
require "net/http"

url = URI("http://localhost:3000/api/users/sign_in")

http = Net::HTTP.new(url.host, url.port);
request = Net::HTTP::Post.new(url)
form_data = [['user[email]', 'alex2@test.com'],['user[password]', 'password1']]
request.set_form form_data, 'multipart/form-data'
response = http.request(request)
puts response.read_body
puts response.header['Authorization']
