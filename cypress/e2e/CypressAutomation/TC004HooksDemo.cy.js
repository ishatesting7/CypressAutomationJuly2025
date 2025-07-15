describe('Hooks in Cypress', ()=>{

    after('Executing After',()=>{

        cy.log('I am in After');

        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();

        //base URL - 

    })

    afterEach('Executing After Each test',()=>{


        cy.log('I am in After each');

    })

    it('Hooks', ()=>{
        
        cy.log("I am in test cases")

    })


    before('Executing Before',()=>{

        cy.log('I am in before');
            
    })

    beforeEach('Executing before Each test',()=>{

        cy.log('I am in before Each');

    })

})