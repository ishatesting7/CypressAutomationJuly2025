describe('Capture Screenshot and Video', ()=>{

    it('Capture Video and Screenshot', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.wait(2000);

        cy.screenshot();

        cy.screenshot("Demo");

        cy.get('.orangehrm-login-branding > img').screenshot();

        cy.get('[class="oxd-input oxd-input--active"]').first().screenshot();

        cy.get('[class="oxd-input oxd-input--active"]').last().screenshot();

        
    })

    it('Failed Test Cases', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name="username"]').type('admin');
        cy.get('[name="password"]').type('admin1234')
        cy.get('[type="submit"]').click();
        cy.wait(3000);
        cy.get('.oxd-alert-content').should('not.be.visible');
        
        //When you run in headless mode it will show the screenshot
    })
})