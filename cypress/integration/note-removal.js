import { goToNotesListPage } from "../support/steps";

describe('Note removal:', () => {
    beforeEach( () => {
        goToNotesListPage();
    });

    it('should remove note', () => {
        cy.get('.note-list .note-item').eq(2)
        cy.get('.note-list .note-item').first().find('.button').contains('Delete').click();
        cy.get('.modals').find('.button').contains('Let\'s do it').click();

        cy.reload();
        cy.get('.note-list .note-item').eq(1)
    });
});
