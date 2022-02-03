
Description('NavComponent Testing'){
Feature: Routing is functioning for each component
Given: I am a Developer
When:  I click the Home button
Then: The page should Route to the Home page 

Feature: Routing is functioning for each component
Given: I am a Developer
When:  I click the Login/Signup button
Then: The page should Route to the Home page 

Feature: Routing is functioning for each component
Given: I am a Developer
When:  I click the My Account button
Then: The page should Route to the Account page 

Feature: Routing is functioning for each component
Given: I am a Developer
When:  I click the Categories button
Then: The page should Route to the Categories page 

Feature: Routing is functioning for each component
Given: I am a Developer
When:  I click the Contact us button
Then: The page should Route to the Contact us page 
}
Description('Homepage Testing'){
Feature: Routing is functioning in the homepage for the call to action buttons at the bottom of the description
Given: I am a Developer
When: I click the Signup button
Then: The page should route to the Signup Page 

Feature: Routing is functioning in the homepage for the call to action buttons at the bottom of the description
Given: I am a Developer
When: I click the Categories button
Then: The page should route to the Categories Page 
}
Description('My Account Testing'){
Feature: Routing is functioning in the Account page to create new post
Given: I am a developer
When:I click New Post button
Then:The page should route to the New post Page 

Feature: Routing is functioning in the Account page when delete account is complete
Given: I am a developer
When:I click delete account button and confirm
Then:the page should route to the home page
}


EXAMPLE BELOW:
Feature:  Login functionality of social networking site Facebook. 
Given:  I am a facebook user. 
When: I enter username as username. 
And I enter the password as the password 
Then I should be redirected to the home page of facebook 
