const loginPage = require('../pageObject/loginPage');

const loginDemoData = [
    ['standard_user','secret_sauce'],
    ['locked_out_user','secret_sauce'],
    ['problem_user','secret_sauce'],
    ['error_user','secret_sauce']
]

describe('Login into Application with Valid and Invalid creds', ()=>{

    loginDemoData.forEach(([username, password])=>{
    
        it(`Login with Valid ${username} - ${password}`, ()=>{

            loginPage.visit();
            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLoginButton();
        })
    })

    it.only('Login with InValid', ()=>{

        loginPage.visit();
        loginPage.enterUserName('standard_user');
        loginPage.enterPassword('secrt_sauce');
        loginPage.clickLoginButton();
        loginPage.validateErrorMessage();

        
    })
    it('Validate the credentials', ()=>{

        loginPage.visit();
        loginPage.validateCreds();
    })
})