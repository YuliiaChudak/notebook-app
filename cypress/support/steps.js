export const startServer = () => {
    cy.exec('node ../notebook/index.js');
};

export const setupServerEnvironment = () => {
    cy.exec('npm run --prefix ../notebook/ db:reset && npm run --prefix ../notebook/ db:seed');
};

export const stopServer = () => {
    console.log('TRYING TO STOP');
};

export const goToNotesCreationPage = () => {
    cy.visit('/note-list');
    cy.get('.button').contains('Add note').click();

    cy.location('pathname').should('include', 'new');
};
