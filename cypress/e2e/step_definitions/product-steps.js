import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

import {productPage} from '@pages/ProductPage'

before(() => {
})

When("the user adds {string} to cart and verifies {string} in product page", async (itemName, itemPrice) => {
    productPage.elements.priceTag(itemName).invoke('text').then((selectedItemPrice) => {
        cy.log('Item Price is'+selectedItemPrice);
        expect(selectedItemPrice.trim()).to.eql(itemPrice.trim());
     })
    productPage.clickAddtoCart(itemName);
})

Then("the user creates the order with {string} {string} and {string} and verifies checkout {string}", (uname, lname, pcode, itemP) => {
    productPage.continueOrder(uname, lname, pcode);
    productPage.verifyCheckout(itemP);
    productPage.finishOrder();
})

When("the user checkouts the cart", () => {
    productPage.checkoutCart();
})

Then("the user gets order confirmation message {string}", (confirmMsg) => {
    productPage.checkOrderConfirm(confirmMsg)    
})
