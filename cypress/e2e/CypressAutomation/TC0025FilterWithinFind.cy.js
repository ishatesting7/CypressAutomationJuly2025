describe('Filter within Find', () => {

    it('Filter within Find', () => {
    
    
        cy.visit('/auth/login');
        cy.loginIntoOrangeHRMS('Admin', 'admin123');
        cy.get('[class="oxd-pie-chart"]',{timeout:3000}).should('be.visible');

        cy.get('ul[class="oxd-main-menu"]').find('li').eq(0).should('have.text','Admin');

        cy.get('li').filter(':contains("Diretory")').should('have.length', 1)


        cy.get('input[type="checkbox"]').eq(0).should('be.visible').check({force:true}).should('be.checked');
       // cy.get('button').filter(':visible').click();

       //cy.get('input[type="text"]').filter(':visible').type('Admin', {force:true});
       //cy.get('input[type="checkbox"]').filter(':checked').check({force:true});
    })
})