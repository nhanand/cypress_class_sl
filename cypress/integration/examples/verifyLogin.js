import homePage from "../../pages/homePage";
import loginPage from "../../pages/loginPage";

it("User should be able to login with valid credentials", () => {
    cy.visit("https://bstackdemo.com/")
    homePage.clickOnSignin()
    loginPage.login()
    homePage.elements.logoutBtn().should("have.text", "Logout")
  })