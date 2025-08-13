class parabankLogin
{

    loginUsernameInput = 'input[name="username"]';
    loginPasswordInput = 'input[name="password"]';
    loginBtn = 'input[type="submit"]';

    loginAfterRegistration(username, password)
    {
            //Login after registration
        cy.get(this.loginUsernameInput).type(username);
        cy.get(this.loginPasswordInput).type(password);
        cy.get(this.loginBtn).click();
    }
}
module.exports = new parabankLogin();