describe('Drag and Drop', () => {
  before(() => {
    cy.visit('/drag_and_drop')
  })

  it('should be drag cypress icon to node box', () => {
    const dataTransfer = new DataTransfer();
  
    cy.get('img[alt="Cypress"]').trigger('dragstart', {dataTransfer})
    cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})
  });
  
  it('should be drag robot icon to python box', () => {  
    const dataTransfer = new DataTransfer();
  
    cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})
    cy.get('.python figure[draggable=true]').trigger('drop', {dataTransfer})
  });
});