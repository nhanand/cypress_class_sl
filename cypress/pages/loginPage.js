class loginPage {
    elements = {
      usernameDropDown: () => cy.get("#username"),
      selectUser: () => cy.xpath("//div[contains(text(),'demouser')]"),
      passwordDropDown: () => cy.get("#password"),
      passwordOption: () => cy.xpath("//div[contains(text(),'testingisfun99')]"),
      loginBtn: () => cy.get("#login-btn"),
    }
  
    login() {
      this.elements.usernameDropDown().click()
      this.elements.selectUser().click()
      this.elements.passwordDropDown().click()
      this.elements.passwordOption().click()
      this.elements.loginBtn().click()
    }
  }
  
  module.exports = new loginPage()
  require("cypress-xpath")