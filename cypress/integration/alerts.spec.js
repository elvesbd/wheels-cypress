it('should display an alert message', () => {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Alerta').click()
  cy.on('window:alert', (result) => {
    expect(result).to.equal('Isto é uma mensagem de alerta')
  })
});