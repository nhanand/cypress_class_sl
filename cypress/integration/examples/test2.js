/// <reference types="Cypress"/>
describe("My first test suite",  () => {
    it("My first test case", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  
  
      //Check Box
      cy.wait(2000)
      cy.get("#checkBoxOption1")
        .check()
        .should("be.checked")
        .and("have.value", "option1")         
  
  
       cy.wait(2000)
  
  
       cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

       // checking multiple elements in one go
      cy.get("input[type='checkbox']").check(["option2", "option3"])
  
  
      //Static Dropdown example
  
  
      cy.get("#dropdown-class-example")
        .select("option2")
        .should("have.value", "option2")
  
  
      //Suggestion dynamic dropdown
  
  
     cy.get(".ui-autocomplete-input").type("ind")
  
  
       cy.get(".ui-menu-item div").each(($el, index, $list) => {
        if ($el.text() === "India") {
          cy.wrap($el).click()
        }
       })
  
  
      cy.get(".ui-autocomplete-input").should("have.value", "India")
    })
  })
  