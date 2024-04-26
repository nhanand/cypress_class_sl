describe("My first test suite", function () {
    it("My first test case", function () {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/")
      cy.wait(2000)
      cy.get("input[type='search']").type("ca")
      cy.get(".product:visible").should("have.length", 4)
  
  
      // Find specific product - Parent child concept
  
  
      cy.get(".products").find(".product").should("have.length", 4)
  
  
      cy.get(".products").find(".product").eq(3).contains("ADD TO CART").click()
  
  
      //Find specific product and add to cart - each -Interate to array
  
  
      cy.get(".products")
        .find(".product")
        .each(($el, index, $list) => {
          // Parentheses added here
          const textVeg = $el.find("h4.product-name").text()
          if (textVeg.includes("Cashew")) {
            cy.wrap($el).find("button").click()
          }
          console.log("Code execution from javascript")
        })
    })
  })
  