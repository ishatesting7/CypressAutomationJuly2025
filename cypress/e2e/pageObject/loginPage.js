class LoginPage
{
    //Each web page for the AUT - Will be considered as individual class file
    //If your application is having 20 pages then you should have 20 page object files
    //This section is called as Page Elements
    usernameInput = "#user-name";
    passwordInput = "#password";
    loginBtn = "#login-button";
    errorMessageDemo = '[data-test="error"]';
    sauceDemoCredentials = '[data-test="login-credentials"]';
    errorTextMessage ='Epic sadface: Username and password do not match any user in this service'
    //This section is called as Page Object
    visit()
    {
        cy.visit('https://www.saucedemo.com/');
    }

    enterUserName(username)
    {
        cy.get(this.usernameInput).type(username);
    }

    enterPassword(password)
    {
        cy.get(this.passwordInput).type(password);
    }

    clickLoginButton()
    {
        cy.get(this.loginBtn).click();
    }
    validateCreds()
    {
        cy.get(this.sauceDemoCredentials).should('contain','standard_user');
        cy.get(this.sauceDemoCredentials).should('contain','locked_out_user');
        cy.get(this.sauceDemoCredentials).should('contain','problem_user');
        cy.get(this.sauceDemoCredentials).should('contain','error_user');

    }
    validateErrorMessage()
    {
        cy.get(this.errorMessageDemo).should('have.text',this.errorTextMessage);
    }

}
export default new LoginPage();