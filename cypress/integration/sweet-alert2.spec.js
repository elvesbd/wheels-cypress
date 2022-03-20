it('should click the success button and display the success message in the pop up', () => {
  cy.visit('/sweet_alert')

  cy.contains('button', 'Sucesso').click()
  cy.get('.swal-text')
    .should('have.text', 'Você clicou no botão verde.')
  cy.get('.swal-button--confirm').click()
});

it('should click the went bad button and display the error message in the pop up', () => {
  cy.visit('/sweet_alert')

  cy.contains('button', 'Deu Ruim').click()
  cy.get('.swal-text')
    .should('have.text', 'Você clicou no botão vermelho.')
  cy.get('.swal-button--confirm').click()
});