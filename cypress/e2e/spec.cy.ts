describe('test whole application', () => {
  it('searches gifs', () => {
    cy.visit('/');
    cy.get('[role="searchbox"]').type('dogs');
    cy.get('[role="search"]').submit();
    cy.get('.search-results')
      .invoke('text')
      .should('match', /Found\: \d+ gifs/gi);
  });
});
