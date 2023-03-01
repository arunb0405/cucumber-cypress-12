import {
    Given,
    When,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";

before(() => {
    testEnv = Cypress.env('host')
    console.log(`Derived Host is - ${testEnv}`)
})

Given('the User is on Login page', () => {
    cy.visit(`https://app.${testEnv}.mediaportal.com/isentia/#/login`)
    // cy.visit('/') => Visits the base URL
})

When("the user enters the username {string}", (username) => {
    cy.get('input[isentiatextinput]').clear().type(username);
})

When("the user enters the password {string}", (password) => {
    cy.get('input[isentiapasswordinput]').clear();
    cy.get('input[isentiapasswordinput]')
        .type(password);
})

When("the user enters valid username {string} and password {string}", (username, password) => {
    cy.get('input[isentiatextinput]').clear().type(username);
    cy.get('input[isentiapasswordinput]').clear();
    cy.get('input[isentiapasswordinput]')
        .type(password);
})

When("the user signs in", () => {
    cy.get('button[type="submit"]').click();
})

Then("the user verifies login page title", () => {
    cy.title().should('include', 'Your feed - Isentia');
})

When("the user logs off", () => {
    cy.get('isentia-avatar').click();
    cy.contains('span', 'Sign out').click();
})


