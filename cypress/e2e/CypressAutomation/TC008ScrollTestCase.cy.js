
/*
cy.scrollIntoView
cy.scrollTo
*/

describe('Scroll Behaviour', ()=>{

    it('Scroll', ()=>{

        cy.visit('https://example.cypress.io/commands/actions');

        cy.wait(2000);

        cy.scrollTo('bottom')

        //cy.get('#scrollable-horizontal').scrollTo('right')

        //cy.get('#scrollable-vertical').scrollTo(250, 250)

        //cy.get('#scrollable-both').scrollTo('75%', '25%')

        cy.get('#scrollable-both').scrollTo('bottomRight', { duration: 6000 })



    })

    it('Test Case for Scroll Login',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click();
        cy.scrollTo('bottom');
        cy.get('.oxd-layout-footer > :nth-child(2) > a').click();
        
    })


    it('Test Case for scrollIntoView Login',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click({force:true});
        cy.contains('Admin').click();
        cy.get(':nth-child(6) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').scrollIntoView().should('be.visible');
        

        cy.get(':nth-child(6) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click();

        cy.get('.orangehrm-modal-footer > .oxd-button--ghost').click();
        //Clicking on hidden element -{force:true}

        //.oxd-table-body .oxd-table-card:nth-child(6) .oxd-table-row.oxd-table-row--with-border .oxd-table-cell.oxd-padding-cell .oxd-table-cell-actions:nth-child(1) 
    })

    it.only('Test Case for Delete User',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click({force:true});
        cy.contains('Admin').click();
        cy.get('[class="oxd-input oxd-input--active"]').last().type('ArunkumarJr.62')

        cy.get('[type="submit"]').click();

        cy.wait(3000);
        cy.get('[class="oxd-icon bi-trash"]').click({force:true});

        cy.contains(' Yes, Delete ').click();

    })
})