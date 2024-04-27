describe("POST request Test", () => {
    it("Should create a new user and verify response", () => {
      cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: {
          name: "morpheus",
          job: "leader",
        },
      }).then((Response) => {
        expect(Response.status).to.eq(201)
        expect(Response.body).to.have.property("name", "morpheus")
      })
    })
  })