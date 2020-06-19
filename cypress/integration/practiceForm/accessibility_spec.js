describe("Practice Form - Accessibility Tests", () => {

    it("Verifys no WCAG violations on page load", () => {
        cy.visit("/");
        cy.navigateToForm();

        cy.injectAxe()

        cy.get('#userName-label').should('be.visible')
       
        cy.checkA11y(null, {
            runOnly: {
              type: 'tag',
              values: ['wcag2a','wcag2aa']
            }
          })
    });

})