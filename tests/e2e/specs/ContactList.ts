describe('My First Test', () => {
  it('Check the nav page correct appear', () => {
    cy.visit('/');
    cy.get('nav')
      .find('img')
      .should('have.attr', 'alt')
      .should('include', 'logo_agenda');

    cy.get('nav')
      .find('img')
      .should('have.attr', 'aria-label')
      .should('include', 'Logo do site de agenda');

    cy.get('nav')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'ic-logo');
  });

  it('Check the nav form page correct behavior', () => {
    cy.get('nav')
      .find('form')
      .find('input')
      .should('have.attr', 'alt')
      .should('include', 'input_header_search');

    cy.get('nav').find('form').find('input').type('Allison');

    cy.get('nav').find('form').find('button').click();

    cy.get('nav').find('form').find('input').clear();
  });

  it('Check the nav page correct appear', () => {
    cy.visit('/');
    cy.get('nav')
      .find('img')
      .should('have.attr', 'alt')
      .should('include', 'logo_agenda');

    cy.get('nav')
      .find('img')
      .should('have.attr', 'aria-label')
      .should('include', 'Logo do site de agenda');

    cy.get('nav')
      .find('img')
      .should('have.attr', 'src')
      .should('include', 'ic-logo');
  });

  it('Check the content page empty and save a item', () => {
    cy.contains('Nenhum contato foi criado ainda');
    cy.contains('Criar contato');

    cy.get('.empty-list').find('button').click();

    cy.get('input[name="contact-name"]').type('Allison');

    cy.get('input[name="contact-email"]').type('allison@email.com');

    cy.get('input[name="contact-phone"]').type('31998901408');

    cy.get('button').contains('Salvar').click();
  });

  it('Edit the item page', () => {
    cy.contains('Allison');

    cy.contains('allison@email.com');

    cy.contains('31998901408');

    cy.get('.cs-list__actions').find('[alt="Editar o contato"]').click();

    cy.get('input[name="contact-name"]').clear();

    cy.get('input[name="contact-name"]').type('Manoel');

    cy.get('button').contains('Salvar').click();

    cy.contains('Manoel');
  });

  it('Delete the item page', () => {
    cy.contains('Manoel');

    cy.contains('allison@email.com');

    cy.contains('31998901408');

    cy.get('.cs-list__actions').find('[alt="Deletar o contato"]').click();

    cy.contains('Deseja realmente excluir o contato?');

    cy.get('button').contains('Sim').click();

    cy.contains('Nenhum contato foi criado ainda');
  });
});
