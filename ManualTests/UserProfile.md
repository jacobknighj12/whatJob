
Feature: Users Username data is editable in Account page
Given: I am a Developer
When:  I click edit on the Username
Then: The username field should become editable
And: When the data is changed then submitted
Finally: The Users Username is displaying the updated name after being sent to the database

Feature: User data is editable in Account page
Given: I am a Developer
When:  I click edit on the Email
Then: The Email field should become editable
And: When the data is changed then submitted
Finally: The Users Email is displaying the updated name after being sent to the database

Feature: User data is editable in Account page
Given: I am a Developer
When:  I click edit on the Password
Then: The Password field should become editable
And: When the data is changed then submitted
Finally: The Users Password is displaying the updated name after being sent to the database

Feature: User data is editable in Account page
Given: I am a Developer
When:  I click dark mode
Then: The page should change to darkmode
And: Remember this accounts settings

EXAMPLE BELOW:
Feature:  Login functionality of social networking site Facebook. 
Given:  I am a facebook user. 
When: I enter username as username. 
And I enter the password as the password 
Then I should be redirected to the home page of facebook 
