describe('Routing', () => {
    it('should move to the main page', () => {
        cy.visit('/');

        cy.getByTestId('main-page').should('be.visible');
    });

    it('should move to the about page', () => {
        cy.visit('/about');

        cy.getByTestId('about-page').should('be.visible');
    });

    it('should redirect to not found page on trying to access the wrong route', () => {
        cy.visit('/wrong-route');

        cy.getByTestId('not-found-page').should('be.visible');
    });

    context('User is authorized', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });

        it('should redirect to the profile page on after authorization is completed', () => {
            cy.visit('/profile/1');

            cy.getByTestId('profile-page').should('be.visible');
        });

        it('should move to the articles page', () => {
            cy.visit('/articles');

            cy.getByTestId('articles-page').should('be.visible');
        });
    });

    context('User is unauthorized', () => {
        it('should redirect to the main page on trying to access profile page without authorization', () => {
            cy.visit('/profile/1');

            cy.getByTestId('main-page').should('be.visible');
        });
    });
});
