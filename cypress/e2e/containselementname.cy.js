describe('Search for query', () => {

    it('finds the content "login"', () => {

      cy.visit('https://www.saucedemo.com')

      cy.contains("Login") 
    //   dia case sensitive

    })

  })