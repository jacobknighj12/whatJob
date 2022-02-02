
Describe('testing with postman api calls'){
Feature: Through postman check that the post to sign up route can only take valid Username inputs to create an account 
Given: I am a Developer
When:  I click the send button in postman with invalid Username inputs to sign up
Then: The database should not create an entry

Feature: Through postman check that the post to sign up route can only take valid Email inputs to create an account 
Given: I am a Developer
When:  I click the send button in postman with invalid Email inputs to sign up
Then: The database should not create an entry

Feature: Through postman check that the post to sign up route can only take valid Username length inputs to create an account 
Given: I am a Developer
When:  I click the send button in postman with invalid Username input lengths to sign up
Then: The database should not create an entry

Feature: Through postman check that the post to sign up route can only take valid Email length inputs to create an account 
Given: I am a Developer
When:  I click the send button in postman with invalid Email input lengths to sign up
Then: The database should not create an entry

Feature: Through postman check that the post to sign up route can only take valid inputs to create an account 
Given: I am a Developer
When:  I click the send button in postman with valid input lengths to sign up
Then: The database should create an entry

Feature: Through postman check that the post request to the posts route can only take valid Users to create a post 
Given: I am a Developer
When:  I click the send button in postman with invalid User to create a post
Then: The database should not create an entry

Feature: Through postman check that the post request to the posts route can only take valid User JWT keys to create a post 
Given: I am a Developer
When:  I click the send button in postman with invalid User JWT key to create a post
Then: The database should not create an entry

Feature: Through postman check that the post request to the posts route can only take valid User JWT keys to create a post 
Given: I am a Developer
When:  I click the send button in postman with invalid User JWT key to create a post
Then: The database should not create an entry


}
EXAMPLE BELOW:
Feature:  Login functionality of social networking site Facebook. 
Given:  I am a facebook user. 
When: I enter username as username. 
And I enter the password as the password 
Then I should be redirected to the home page of facebook 
