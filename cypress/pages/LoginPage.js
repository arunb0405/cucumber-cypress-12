class LoginPage {
  pageTitle = "Swag Labs";

  elements = {
    usernameInput: () => cy.get("input[data-test='username']"),
    passwordInput: () => cy.get("input[data-test='password']"),
    loginBtn: () => cy.get("input[data-test='login-button']"),
    profileBtn: () => cy.get('#react-burger-menu-btn'),
    signOutBtn: () => cy.get('a').contains('Logout'),  
    errorMessage: () => cy.get('h3[data-test="error"]')
  };

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().clear();
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  clickLogout() {
    this.elements.profileBtn().click();
    this.elements.signOutBtn().click();
  }

  submitLogin(username,password){
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
}

export const loginPage = new LoginPage();
