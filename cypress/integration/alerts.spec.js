it('should display an alert message', () => {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Alerta').click()
  cy.on('window:alert', (result) => {
    expect(result).to.equal('Isto é uma mensagem de alerta')
  })
});

it('should confirm the request', () => {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Confirma').click()
  cy.on('window:confirm', () => true)
  cy.get('#result').should('have.text', 'Mensagem confirmada')
});

it('should canceled the request', () => {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Confirma').click()
  cy.on('window:confirm', () => false)
  cy.get('#result').should('have.text', 'Mensagem não confirmada')
});

it('should display a welcome message with my name', () => {
  cy.visit('/javascript_alerts')

  cy.window().then(($win) => {
    cy.stub($win, 'prompt').returns('Elves')
    cy.contains('button', 'Prompt').click()
  })

  cy.get('#result').should('have.text', 'Olá, Elves')
});