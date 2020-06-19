describe("Practice Form - Name Field Tests", () => {

    beforeEach(function () {
        cy.visit("/");
        cy.navigateToForm();
    })

    it("Verifys the User Name form label is correct", () => {
        cy.get('#userName-label').should('have.text', 'Name')
    });

    it("Verifys the First Name form field shadow text is correct", () => {
        cy.get('#firstName').should('have.attr', 'placeholder', 'First Name')
    });

    it("Verifys the First Name form field can accept input", () => {
        cy.get("#firstName").type("Scott").should("have.value", "Scott");
    });

    it("Verifys the Last Name form field shadow text is correct", () => {
        cy.get('#lastName').should('have.attr', 'placeholder', 'Last Name')
    });

    it("Verifys the Last Name form field can accept input", () => {
        cy.get("#lastName").type("McKenzie").should("have.value", "McKenzie");
    });

    it("This is an example of a failed test", () => {
        cy.get("#lastName").should("have.value", "FAIL");
    });
})

