describe('OrangeHRM - Add New User', () => {
    it('Logs in, navigates to Add User form, and fills it out', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
  
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
      cy.contains('button', 'Add').should('be.visible').click();
  
      cy.contains('h6', 'Add User').should('be.visible');
  
      cy.get('div.oxd-select-wrapper').eq(0).click(); 
      cy.wait(2000)
      cy.contains('ESS').click();
  
      cy.get('input[placeholder="Type for hints..."]').type('FirstName akhil LastNameTest',{delay:1000}).type('{downarrow}').type('{enter}');
      cy.wait(1000); 
  
      cy.get('div.oxd-select-wrapper').eq(1).click(); 
      cy.contains('span', 'Enabled').click();
  
      cy.get('input[autocomplete="off"]').eq(0).type('linda.test123'); 
      cy.get('input[type="password"]').eq(0).type('Test@1234'); 
      cy.get('input[type="password"]').eq(1).type('Test@1234'); 
  
      cy.contains('button', 'Save').click();
  
      cy.url().should('include', '/admin/viewSystemUsers');
      cy.contains('linda.test123').should('exist'); 
    
});
  });
  