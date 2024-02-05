describe('Assertion', () => {

    it('clicking "login" navigates to a new url', () => {

      cy.visit('https://www.saucedemo.com')

      cy.contains("Login").click()

      // Should be on a new URL which includes '/inventory.html'
      //   gk berhasil karena harus input username dan password dulu

      cy.url().should('include', '/inventory.html')

    })

  })