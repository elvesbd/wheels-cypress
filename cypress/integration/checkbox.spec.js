it('should be select the 5 best marvel movies', () => {
  cy.visit('/checkboxes')

  const movies = [
    'avengers',
    'cap2',
    'guardians',
    'blackpanther',
    'thor3'
  ]

  movies.forEach((movie) => {
    cy.get(`input[name=${movie}]`)
    .click()
    .should('be.checked')
  })
});