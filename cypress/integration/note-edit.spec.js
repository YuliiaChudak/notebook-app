import { goToNotesEditPage, goToNotesListPage } from "../support/steps";

describe('Note edition:', () => {
    beforeEach( () => {
        goToNotesListPage();
        goToNotesEditPage();
    });

    it('should edit person\'s role', () => {
        cy.get('.dropdown[name="role_id"]').click();
        cy.get('div[role="option"]').contains('Friends').click();
        cy.get('.button').contains('Save').click({ force: true });

        goToNotesListPage();
    });
});
