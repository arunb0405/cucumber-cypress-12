Feature: Login page with Tags

Feature Login page will work depending on the user credentials with Tags

@Login
Scenario Outline: Test Successful login
Given the User is on Login page
When the user logs in entering "<uname>" and password "<passwd>"
Then the user verifies login page title
When the user adds "<itemName>" to cart and verifies "<item_price>" in product page
When the user checkouts the cart
Then the user creates the order with "<firstName>" "<lastName>" and "<postCode>" and verifies checkout "<item_price>"
Then the user gets order confirmation message "<confirmMsg>"
And the user logs off
Examples:
 | uname         | passwd           | itemName           | firstName | lastName | postCode | item_price | confirmMsg               |
 | standard_user | secret_sauce     | Sauce Labs Backpack| Allan     | Border   | 2000     | $29.99     | Thank you for your order!|

Scenario Outline: Test Failed login
Given the User is on Login page
When the user logs in entering "<uname>" and password "<passwd>"
And the user signs in
Then the user verifies Error message "<errMsg>"
Examples:
 | uname         | passwd          | errMsg                                      |
 | standard_user | secret_sauce12  | Username and password do not match any user |