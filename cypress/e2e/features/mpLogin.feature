Feature: Login page with Tags

Feature Login page will work depending on the user credentials with Tags

@Login
Scenario Outline: Successful login
Given the User is on Login page
When the user enters valid username "<uname>" and password "<passwd>"
And the user signs in
Then the user verifies login page title
And the user logs off
Examples:
 | uname  | passwd     |
 | qaanz2 | test12     |
 | akeers2| test12     |