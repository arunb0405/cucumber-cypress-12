Feature: Login page with Tags

Feature Login page will work depending on the user credentials with Tags

@Login
Scenario Outline: Test Successful login
Given the User is on Login page
When the user logs in entering "<uname>" and password "<passwd>"
Then the user verifies login page title
When the user adds "<itemName>" to cart
When the user checkouts the cart
Then the user creates the order with "<firstName>" "<lastName>" and "<postCode>" and verifies checkout
And the user logs off
Examples:
 | uname         | passwd           | itemName           | firstName | lastName | postCode |
 | standard_user | secret_sauce     | Sauce Labs Backpack| Jaryd     | Bond     | 2000     |

Scenario Outline: Test Failed login
Given the User is on Login page
When the user logs in entering "<uname>" and password "<passwd>"
And the user signs in
Then the user verifies Error message "<errMsg>"
Examples:
 | uname         | passwd          | errMsg                                      |
 | standard_user | secret_sauce12  | Username and password do not match any user |