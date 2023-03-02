import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

import {productPage} from '@pages/ProductPage'

before(() => {
})

When("the user adds {string} to cart", (itemName) => {
    productPage.clickAddtoCart(itemName);
})

Then("the user creates the order with {string} {string} and {string} and verifies checkout", (uname, lname, pcode) => {
    productPage.continueOrder(uname, lname, pcode);
    productPage.verifyCheckout();
    productPage.finishOrder();
})

When("the user checkouts the cart", () => {
    productPage.checkoutCart();
})


