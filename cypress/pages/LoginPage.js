class LoginPage {
  elements = {
    usernameInput: () => cy.get("input[isentiatextinput]"),
    passwordInput: () => cy.get("input[isentiapasswordinput]"),
    loginBtn: () => cy.get("button[type='submit']"),
    profileBtn: () => cy.get('isentia-avatar'),
    signOutBtn: () => cy.contains('span', 'Sign out'),  
    errorMessage: () => cy.get('input[type="password"]').siblings('p[isentiatext]')
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
