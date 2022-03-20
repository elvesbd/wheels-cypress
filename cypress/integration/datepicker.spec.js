it('should be select birth data', () => {
  cy.visit('/datepicker')

  const date = {
    month: 'fev',
    year: '1983',
    day: '13'
  }

  cy.get('.datetimepicker-dummy-input').click()

  cy.get('.datepicker-nav-month').click()
  cy.contains('.datepicker-month', date.month).click()

  cy.get('.datepicker-nav-year').click()
  cy.contains('.datepicker-year span', date.year).click()

  cy.contains('.is-current-month button[class=date-item]', new RegExp('^' + date.day + '$', 'g')).click()
});
