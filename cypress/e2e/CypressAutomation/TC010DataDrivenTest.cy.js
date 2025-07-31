describe('Read Value from JSON', ()=>{


    it('Read Value from JSON', ()=>{

    cy.fixture('loginCredDataDriven').then((dataV)=>{


        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        dataV.forEach((element) => {
            

            
            let username = atob(element.username);
            let password = btoa(element.password);
            cy.get('[name="username"]').type(username,{force:true});
            cy.get('[name="password"]').type(password, {log:false});
            cy.get('[type="submit"]').click({force:true});

            if(element.username == 'Admin' && element.password == 'admin123')
            {
                cy.get('.oxd-userdropdown-tab').click();
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                cy.wait(1500);
            }


            // JWT Token, Bearer Token, Username and Password, Access Token


        });

    })
    })
})