describe("Orange HRMS Login Flow",()=>{

    var expectURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers';
    var url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    
    it.only('Test Case with Valid User and Valid Pass',()=>{

        cy.visit(url);
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.wait(3000);
        cy.get('[alt="client brand banner"]').should('be.visible');
        cy.contains('Admin').click(); //Navigating to Admin
        cy.url().should('contain','admin'); //Validating it is 
        cy.url().should('eq',expectURL);
        cy.pause();
    })

    it('Test Case with Valid User and InValid Pass',()=>{

        cy.visit(url);
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin1234')
        cy.get('[type="submit"]').click();
        cy.get('.oxd-alert-content').should('be.visible');
        
    })

    it('Test Case with InValid User and Valid Pass',()=>{

        cy.visit(url);
        cy.get('[name="username"]').type('admin1');
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click();
        cy.get('.oxd-alert-content').should('be.visible');
    })

    it('Test Case with Invalid User and Invalid Pass',()=>{

        cy.visit(url);
        cy.get('[name="username"]').type('admin1');
        cy.get('[name="password"]').type('admin1234')
        cy.get('[type="submit"]').click();
        cy.get('.oxd-alert-content').should('be.visible');

    })

    //only - It is for running only single test
    //skip - It is for skipping the test case


})

