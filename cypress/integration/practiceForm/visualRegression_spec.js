describe("Practice Form - Visual Regression Tests", () => {

    beforeEach(function () {
        cy.visit("/");
        cy.navigateToForm();
    })

    it("Verify no visual regression on practice form", () => {

        cy.get('#firstName');

        cy.compareSnapshot('practiceForm', {
            capture: 'fullPage',
            errorThreshold: 0.0
          });

    })
})
