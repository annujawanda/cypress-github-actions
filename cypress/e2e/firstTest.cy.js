describe('Cypress official website', () => {
    it('Verify title of the page', () => {
      cy.visit('https://www.cypress.io/')
    cy.title().should('eq','JavaScript Component Testing and E2E Testing Framework | Cypress')
    })
  })