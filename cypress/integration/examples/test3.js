/// <reference types="Cypress"/>
describe("My first test suite", function () {
    it("My first test case", function () {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  
  
      //Check Box
      cy.wait(2000)
      cy.get("#checkBoxOption1")
        .check()
        .should("be.checked")
        .and("have.value", "option1")
  
  
      cy.wait(2000)
  
  
      cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
      cy.get("input[type='checkbox']").check(["option2", "option3"])
  
  
      //Static Dropdown example
  
  
      cy.get("#dropdown-class-example")
        .select("option2")
        .should("have.value", "option2")
    })
  })
  