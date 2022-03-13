const badIframe = () => {
  return cy
    .get('iframe[src*=instagram]')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}

it('should validate followers total', () => {
  cy.visit('/bad_iframe')

  badIframe()
    .contains('.FollowerCountText', '6,451 followers')
    .should('be.visible')
});