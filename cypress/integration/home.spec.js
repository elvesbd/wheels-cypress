it('Should open the home page', () => {
  cy.visit('https://training-wheels-qaninja.herokuapp.com/')

  cy.title()
    .should('eq', 'Training Wheels | QAninja') // eq = equal
    
  cy.get('ul[class=menu-list]')
    .should('be.visible')
});