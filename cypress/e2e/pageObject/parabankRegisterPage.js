class parabankRegister
{
        //This section is called as Page Elements
        //Store all the locators for the registration page
        firstNameInput = '[id="customer.firstName"]';
        lastNameInput = '[id="customer.lastName"]';
        addressInput = '[id="customer.address.street"]';
        cityInput = '[id="customer.address.city"]';
        stateInput = '[id="customer.address.state"]';
        zipCodeInput = '[id="customer.address.zipCode"]';
        phoneNumberInput = '[id="customer.phoneNumber"]';
        ssnInput = '[id="customer.ssn"]';
        usernameInput = '[id="customer.username"]';
        passwordInput = '[id="customer.password"]';
        confirmPasswordInput = '[id="repeatedPassword"]';
        registerButton = 'input[value="Register"]';    
        //Locator for username and password input fields after registration
       
        alreadyRegisteredUserError = '[id="customer.username.errors"]';

        
        //This section is called as Page Actions
        visit()
        {
            cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        }
        clearAllFields()
        {
            //Clear all the input fields before filling them
            cy.get(this.firstNameInput).clear();
            cy.get(this.lastNameInput).clear();
            cy.get(this.addressInput).clear();
            cy.get(this.cityInput).clear();
            cy.get(this.stateInput).clear();
            cy.get(this.zipCodeInput).clear();
            cy.get(this.phoneNumberInput).clear();
            cy.get(this.ssnInput).clear();
            cy.get(this.usernameInput).clear();
            cy.get(this.passwordInput).clear();
            cy.get(this.confirmPasswordInput).clear();  
        }
        //Method to fill in the registration form
        fillRegistrationForm(firstName, lastName, address, city, state, zipCode,
        phoneNumber, ssn, username, password, confirmPassword)
        {
            //Clear and fill the data in the input fieldsz
            cy.get(this.firstNameInput).type(firstName);
            cy.get(this.lastNameInput).type(lastName);
            cy.get(this.addressInput).type(address);
            cy.get(this.cityInput).type(city);
            cy.get(this.stateInput).type(state);
            cy.get(this.zipCodeInput).type(zipCode);
            cy.get(this.phoneNumberInput).type(phoneNumber);
            cy.get(this.ssnInput).type(ssn);
            cy.get(this.usernameInput).type(username);
            cy.get(this.passwordInput).type(password);
            cy.get(this.confirmPasswordInput).type(confirmPassword);
        }
        //Method to click the register button
        clickRegisterButton()
        {
            cy.get(this.registerButton).click();
        }
        
       
}
module.exports = new parabankRegister();