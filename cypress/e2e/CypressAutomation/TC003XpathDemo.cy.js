describe('Xpath Demo', ()=>{

    it('Xpath Demo', ()=>{

        cy.visit('https://demoblaze.com/');
        cy.xpath('//a[starts-with(@id,"logi")]').click();
        cy.xpath('//input[@id="loginusername"]').type('admin');
        cy.wait(300)
        cy.xpath('//input[@id="loginpassword"]').type('admin');
        cy.get('[onclick="logIn()"]').click();
    })
})

// {
//     "loginLocator":"[class='demo']",
//     "homeLocator":"[class='demo']",
//     "contactLocator":"[class='demo']",
//     "aboutUsLocator":"[class='demo']",
//     "signUpLocator":"[class='demo']",

// }

//Xpath - / and //
// -- / -> Absolute Xpath
// -- // -> Relative Xpath
/*
Way 1 - 
//tagName[@attribute = 'value']
//a[@id='login2']

Way 2 - 
//tagName[text()='Log in']

Way 3 - 
//a[contains(text(),'Ho')]

Way 4 - Using AND and OR
//a[@id='login2' or @class = "nav-link"]
//a[@id='login2' and @class = "nav-link"]

Way 5 - 
starts-with()
//a[starts-with(@id,'log')]
eg - //a[starts-with(@id,'logi')]

Way 6  -

Xpath Axes 
- ancestor
- sibling
- child
- following
- parent
- indexing

*/