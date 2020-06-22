describe("Practice Form - End to End Tests", () => {

    beforeEach(function () {
        cy.visit("/");
        cy.navigateToForm();
    })

    it("Happy Path Test", () => {
        cy.get('#firstName').type('Scott')
        cy.get('#lastName').type('McKenzie')
        cy.get('#userEmail').type('testemail@testing.co.uk')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#userNumber').type('07123456789')

        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__year-select').select('1980')
        cy.get('.react-datepicker__month-select').select('January')
        cy.get(':nth-child(1) > .react-datepicker__day--001').click()
      
        cy.get('.subjects-auto-complete__value-container').type('Test engineering')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
        cy.get('#currentAddress').type('21 Test Address \nTest Town')
        cy.get('#stateCity-wrapper > :nth-child(2)').click()
        cy.get('#react-select-3-option-0').click()
        cy.get('#stateCity-wrapper > :nth-child(3)').click()
        cy.get('#react-select-4-option-2').click()
        cy.get('#submit').click()

        cy.get('.modal').should('be.visible')
        cy.get('#example-modal-sizes-title-lg').should('have.text','Thanks for submitting the form')
        cy.get('#closeLargeModal').click()
        cy.get('.modal').should('not.be.visible')

    });
})