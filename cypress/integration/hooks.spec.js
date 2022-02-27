describe('switch tests', () => {
  before(() => {
    cy.log('Aqui temos algo que roda antes de todos os testes')
  })

  beforeEach(() => {
    cy.log('Aqui temos algo que roda antes de cada teste')
  })

  it('should be test 1', () => {
    cy.log('testing test one')
  });
  
  it('should be test 2', () => {
    cy.log('testing test two')
  });
  
  it('should be test 3', () => {
    cy.log('testing test three')
  });

  afterEach(() => {
    cy.log('Aqui temos algo que roda depois de cada teste')
  })

  after(() => {
    cy.log('Aqui temos algo que roda depois de todos os testes')
  })
});

