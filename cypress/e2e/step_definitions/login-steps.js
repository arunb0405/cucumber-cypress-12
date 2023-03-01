import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

import {loginPage} from '@pages/LoginPage'

before(() => {
    testEnv = Cypress.env('host')
    cy.log(`Derived Host is - ${testEnv}`)
})

Given('the User is on Login page', () => {
     cy.visit(`https://app.${testEnv}.mediaportal.com/isentia/#/login`)
    //  cy.visit('/') //=> Visits the base URL
})

When("the user enters the username {string}", (username) => {
    loginPage.typeUsername(username);
})

When("the user enters the password {string}", (password) => {
    loginPage.typePassword(password);
})

When("the user logs in entering {string} and password {string}", (username, password) => {
    loginPage.submitLogin(username, password);
})

When("the user signs in", () => {
    loginPage.clickLogin();
})

Then("the user verifies login page title", () => {
    cy.title().should('include', 'Your feed - Isentia');
})

When("the user logs off", () => {
    loginPage.clickLogout();
})

When("the user verifies Error message {string}", (errMsg) => {
    loginPage.elements.errorMessage().should(($div) => {
        const text = $div.text();
        console.log('Text is '+text);      
        expect(text).to.include(errMsg);
      })
})


