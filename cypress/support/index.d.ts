declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable;
            getByTestId(id: string): Chainable;
            mockServices(): Chainable;
        }
    }
}

export {};
