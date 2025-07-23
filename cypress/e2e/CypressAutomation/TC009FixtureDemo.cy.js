describe('Read Value from JSON', ()=>{


    it('Read Value from JSON', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.fixture('loginCred').then((data) =>{

            cy.get('[name="username"]').type(data.dataValue.username);
            cy.get('[name="password"]').type(data.dataValue.password);
            cy.get('[type="submit"]').click({force:true});
            
        })

    })
})