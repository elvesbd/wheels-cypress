it('should be upload image', () => {
  cy.visit('/upload')

  const imageFile = 'cypress/fixtures/photo.jpg'

  cy.get('input[name=file]').selectFile(imageFile, {force: true})
  cy.get('input[value=Upload]').click()

  cy.get('img[src="/uploads/photo.jpg"]', {timeout: 7000})
    .should('be.visible')
});