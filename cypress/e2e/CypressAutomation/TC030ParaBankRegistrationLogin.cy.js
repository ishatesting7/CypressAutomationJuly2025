const parabankRegisterPage = require('../pageObject/parabankRegisterPage');     
const parabankLogin = require('../pageObject/parabankLoginPage');
const utiltyDemo = require('../utility/utility');
const constants = require('../utility/constants');
const parabankHomePage = require('../pageObject/parabankHomePage');

describe('ParaBank Registration and Login', () => {
    let loginUserName;
    it('Register a new user and login', () => {
        // Visit the registration page
        parabankRegisterPage.visit();
        // Fill in the registration form
        cy.fixture('parabankRegistrationData.json').then((data) => {
    
            const timestamp = new Date().getTime();
            data.registration.username = `user${timestamp}`;
            loginUserName = data.registration.username; // Store the username for login later
            parabankRegisterPage.clearAllFields();
            parabankRegisterPage.fillRegistrationForm(
                data.registration.firstName,
                data.registration.lastName,
                data.registration.address,
                data.registration.city,
                data.registration.state,
                data.registration.zipCode,
                data.registration.phoneNumber,
                data.registration.ssn,
                data.registration.username,
                data.registration.password,
                data.registration.confirmPassword
            );
            parabankRegisterPage.clickRegisterButton();
            // Verify successful registration
            utiltyDemo.containsText(parabankHomePage.validateUserRegistration, constants.UI_TEXT.validateUserRegistration);
            utiltyDemo.hasText(parabankHomePage.validateUserWelcomeMessage, constants.UI_TEXT.successfulRegistrationMessage);
            utiltyDemo.clickElement(parabankHomePage.logoutButton);
        })

    })

    
   

    it('Login after registration', () => {
        // Ensure the user is registered before logging in
        // Login after registration
        parabankRegisterPage.visit();
        cy.fixture('parabankRegistrationData.json').then((data) => {
        parabankLogin.loginAfterRegistration(loginUserName, data.registration.password); // Use the same password as in the registration
        cy.url().should('include', '/parabank/overview.htm'); // Verify that the user is redirected to the overview page
        cy.get('.title').should('contain', 'Accounts Overview'); // Verify that the title contains 'Accounts Overview'
    })

})
})