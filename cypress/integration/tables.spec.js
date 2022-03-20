it('should be display seven series in total', () => {
  cy.visit('/tables')

  cy.get('table tbody tr')
    .then((series) => {
      expect(series).to.have.length(7)
    })
});

it('should be visible loki serie', () => {
  cy.visit('/tables')

  cy.contains('table tbody tr', 'Loki')
    .then((serie) => {
      expect(serie).to.contain('Marvel')
      expect(serie).to.contain('Disney+')
      expect(serie).to.contain('2021')
    })
});

it('should be remove round 6 serie and check if the table has only six series', () => {
  cy.visit('/tables')

  cy.contains('table tbody tr', 'Round 6')
  .then((serie) => {
    serie.find('.delete').trigger('click')
  })
  .should('not.exist')

  cy.get('table tbody tr')
  .then((series) => {
    expect(series).to.have.length(6)
  })
});