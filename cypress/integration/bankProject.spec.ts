import { BankProjectPage } from '../support/pageObject/bankProject.pageObject';

describe('Bank_Project_Tests', ()  => {
    let page: BankProjectPage;
    before( () => {
        page = new BankProjectPage();
    });

    it('Verify Bank Manager can login in', () => {
        page.navigateTo();
        page.strongTitle().should('be.visible');
        page.buttonBankManager().click();
        page.buttonAddCustomer().should('be.visible');
    });
    it('Verify Bank Manager can add a customer', () => {
        page.navigateTo();
        page.strongTitle().should('be.visible');
        page.buttonBankManager().click();
        page.buttonAddCustomer().should('be.visible');
        page.buttonAddCustomer().click();
        page.inputFirstName().should('be.visible');
        page.inputFirstName().type('firstName-' + page.getRandomInt(10000));
        page.inputLastName().type('lastName-' + page.getRandomInt(10000));
        page.inputPostCode().type(page.getRandomInt(10000).toString());
        page.buttonSubmit().click();
        cy.on('window:alert', (str) => {
            expect(str).to.contain('Customer added successfully with customer id');
        });
        cy.on('window:confirm', () => true);
        page.inputFirstName().should('be.visible');
    });
    it('Verify Bank Manager can create an account', () => {
        page.navigateTo();
        page.strongTitle().should('be.visible');
        page.buttonBankManager().click();
        page.buttonOpenAccount().should('be.visible');
        page.buttonOpenAccount().click();
        page.selectCustomer().should('be.visible');
        page.selectCustomer().type('Harry Potter');
        page.selectCurrency().type('Dollar');
        page.buttonSubmit().click();
        cy.on('window:alert', (str) => {
            expect(str).to.contain('Account created successfully with account Number');
        });
        cy.on('window:confirm', () => true);
        page.selectCustomer().should('be.visible');
    });
    it('Verify Bank Manager can search by customers', () => {
        page.navigateTo();
        page.strongTitle().should('be.visible');
        page.buttonBankManager().click();
        page.buttonShowCustomer().should('be.visible');
        page.buttonShowCustomer().click();
        page.inputSearchCustomer().should('be.visible');
        page.inputSearchCustomer().type('Harry');
        page.aFirstNameShowCustomer().should('contain', 'Harry');
    });
});
