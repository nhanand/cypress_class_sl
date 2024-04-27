class homePage {
    elements = {
      loginBtn: () => cy.get("#signin"),
      logoutBtn: () => cy.get("#logout"),
    }
  
    clickOnSignin() {
      this.elements.loginBtn().click()
    }
  }
  
  module.exports = new homePage()                 // it is constructor