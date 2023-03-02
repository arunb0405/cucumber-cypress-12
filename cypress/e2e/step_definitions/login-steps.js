import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

import {loginPage} from '@pages/LoginPage'

before(() => {
})

Given('the User is on Login page', () => {
     cy.visit('/') //=> Visits the base URL
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
    cy.title().should('include', loginPage.pageTitle);
})

When("the user logs off", () => {
    loginPage.clickLogout();
})

When("the user verifies Error message {string}", (errMsg) => {
    loginPage.elements.errorMessage().should(($div) => {
        const text = $div.text();
        expect(text).to.include(errMsg);
      })     
})


