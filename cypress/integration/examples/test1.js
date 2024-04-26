// describe("My first test suite", function () {
//     it("My first test case", function () {
//       cy.visit("https://rahulshettyacademy.com/seleniumPractise/")
//       cy.wait(2000)
          //using xpath 
    //   cy.get("input[type='search']").type("ca")  
//       cy.get(".product:visible").should("have.length", 4)
//     })
//   })
describe("testing ekart" , function(){
    it("sample test case", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/")
        cy.get(".search-keyword").type("ca")        // using class
        cy.get(".product:visible").should("have.length", 4)
    })
})

