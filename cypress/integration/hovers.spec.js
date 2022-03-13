it('should display the name of the technology when hovering over the image ', () => {
  cy.visit('/hovers')

  const techs = [
    { img: 'img[src*=python]', tag: '.tag-python', text: 'Python' },
    { img: 'img[src*=golang]', tag: '.tag-golang', text: 'Golang' },
    { img: 'img[src*=nodejs]', tag: '.tag-nodejs', text: 'Node.js' },
    { img: 'img[src*=netcore]', tag: '.tag-netcore', text: '.NETCore' }
  ]

  techs.forEach((tech) => {
    cy.wait(500)
    cy.get(tech.img).realHover('mouse')

    cy.get(tech.tag)
      .should('be.visible')
      .should('have.text', tech.text)
  })
});