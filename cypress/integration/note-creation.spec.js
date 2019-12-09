import notes from '../fixtures/notes';

const goToNotesCreationPage = () => {
    cy.visit('http://localhost:3000/note-list');
    cy.get('.button').contains('Add note').click();

    cy.location('pathname').should('include', 'new');
};

describe('Note creation:', () => {
    beforeEach(goToNotesCreationPage);

    it('should be created with all fields completed', () => {
        const [person] = notes;

        cy.get('input[name="first_name"]').type(person.firstName);
        cy.get('input[name="last_name"]').type(person.lastName);
        cy.get('input[name="patronymic"]').type(person.patronymic);
        cy.get('input[name="birthday"]').type(person.birthday);
        cy.get('input[name="occupation"]').type(person.occupation);
        cy.get('input[name="phone"]').type(person.phone);
        cy.get('.dropdown[name="role_id"]').click();
        cy.get('div[role="option"]').contains('Relatives').click();
        cy.get('input[name="country"]').type(person.location.country);
        cy.get('input[name="city"]').type(person.location.city);
        cy.get('input[name="address"]').type(person.location.address);
        cy.get('input[name="is_studying"]').click({ force: true });

        cy.get('.button').contains('Save').click();
    });
});
