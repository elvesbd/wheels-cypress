it('should be tick only one option', () => {
  cy.visit('/radios')

  cy.get('input[value="thor3"]')
    .click()
    .should('be.checked')
});