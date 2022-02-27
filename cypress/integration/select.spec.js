it('should be select bucky by id', () => {
  cy.visit('/select')

  cy.get('#avengerList')
    .select('Bucky')
    .should('have.value', '2')
});

it('should be select bucky by not id', () => {
  cy.visit('/select')

  cy.contains('option', 'Selecione um personagem')
    .parent()
    .select('Tony Stark')
    .should('have.value', '3')
});