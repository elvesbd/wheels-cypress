const niceIframe = () => {
  return cy
    .get('#weareqaninja')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}

it('should validate followers total', () => {
  cy.visit('/nice_iframe')

  niceIframe()
    .contains('.FollowerCountText', '6,451 followers')
    .should('be.visible')
});