describe('E2E Login to inventory', () => {

    it('input valid username dan password then Login', () => {

      cy.visit('https://www.saucedemo.com')
      // <input class="input_error form_input" placeholder="Username" 
      //type="text" data-test="username" id="user-name" name="user-name" autocorrect="off" autocapitalize="none" value="">///
      cy.get('#user-name').type("standard_user")

      // <input class="input_error form_input" placeholder="Password" 
      //type="password" data-test="password" id="password" name="password" autocorrect="off" autocapitalize="none" value="">
      cy.get('#password').type("secret_sauce")

      cy.contains("Login").click()
      cy.url().should('include', '/inventory.html')

    })

  })