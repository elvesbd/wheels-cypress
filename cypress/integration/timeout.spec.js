it('example timeout', () => {
  cy.visit('/timeout')

  cy.contains('button', 'Habilita').click()

  // cy.wait(7000) aguarda 7 segundos para seguir

  cy.get('#firstname')
    .should('be.visible')
    .type('Elves', { timeout: 7000}) // com timeout o sistema tem até 7 segundos para seguir
});