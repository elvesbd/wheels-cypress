it('should be drag cypress icon to node box', () => {
  cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')

  const dataTransfer = new DataTransfer();

  cy.get('img[alt="Cypress"]').trigger('dragstart', {dataTransfer})
  cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})
});

it('should be drag robot icon to python box', () => {
  cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')

  const dataTransfer = new DataTransfer();

  cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})
  cy.get('.python figure[draggable=true]').trigger('drop', {dataTransfer})
});