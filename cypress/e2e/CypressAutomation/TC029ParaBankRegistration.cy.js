const parabankRegisterPage = require('../pageObject/parabankRegisterPage');     
const parabankLogin = require('../pageObject/parabankLoginPage');
const utiltyDemo = require('../utility/utility');
describe('ParaBank Registration and Login', () => {
    
    it('Register a new user and login', () => {
        // Visit the registration page
        parabankRegisterPage.visit();
        // Fill in the registration form
        cy.fixture('parabankRegistrationData.json').then((data) => {
    
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
            utiltyDemo.hasText(parabankRegisterPage.alreadyRegisteredUserError, 'This username already exists.');
        })

    })
})