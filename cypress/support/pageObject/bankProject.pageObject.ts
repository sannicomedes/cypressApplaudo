
export class BankProjectPage {
    buttonBankManager = function () {
        return cy.get('button[ng-click="manager()"]');
    };
    buttonCustomer = function () {
        return cy.get('button[ng-click="customer()"]');
    };
    buttonAddCustomer = function () {
        return cy.get('button[ng-click="addCust()"]');
    };
    buttonOpenAccount = function () {
        return cy.get('button[ng-click="openAccount()"]');
    };
    buttonShowCustomer = function () {
        return cy.get('button[ng-click="showCust()"]');
    };
    strongTitle = function () {
        return cy.get('.mainHeading');
    };
    inputFirstName() {
        return cy.get('input[ng-model="fName"]');
    }
    inputLastName() {
        return cy.get('input[ng-model="lName"]');
    }
    inputPostCode() {
        return cy.get('input[ng-model="postCd"]');
    }
    buttonSubmit() {
        return cy.get('button[type="submit"]');
    }
    selectCustomer() {
        return cy.get('#userSelect');
    }
    selectCurrency() {
        return cy.get('#currency');
    }
    inputSearchCustomer() {
        return cy.get('input[ng-model="searchCustomer"]');
    }
    aFirstNameShowCustomer() {
        return cy.get('.ng-binding').eq(0);
    }


    navigateTo = function () {
        cy.visit(Cypress.config().baseUrl + '#/login');
    };
    getRandomInt(length: number) {
        return Math.floor(Math.random() * Math.floor(length));
    };
}