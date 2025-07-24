const utiltyDemo = require('../pageObject/utility');

describe('Login with custom commands', ()=>{

    it('Login with custome commands', ()=>{

        cy.loginIntoOrangeHRMS('Admin','admin123');
        
        cy.scrollToElement('[href="http://www.orangehrm.com"]');

        utiltyDemo.clickElement('.oxd-userdropdown-tab')

        utiltyDemo.clickElement(':nth-child(4) > .oxd-userdropdown-link');

        
    })
})



/*

Cypress.Command.add('elementIsVisible', (locator)=>{

    cy.get(locator).isVisible();
})

Cypress.Command.add('enterWithXpath', (locator, dropDownValue)=>{

    cy.xpath(locator).type('sadas');

})

*/