describe('Read Excel Test', () => {
    it('should read user data from Excel', () => {
      cy.task('readExcel', { fileName: 'registerData.xlsx', sheetName: 'Sheet1' }).then((data) => {
        cy.log(JSON.stringify(data)); 
        const user = data[0];
  
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
        cy.get('#input-firstname').type(user.firstname);
        cy.get('#input-lastname').type(user.lastname);
        cy.get('#input-email').type(user.email);
        cy.get('#input-telephone').type(user.telephone);
        cy.get('#input-password').type(user.password);
        cy.get('#input-confirm').type(user.password);
        cy.get('[name="agree"]').check();
        cy.get('input[type="submit"]').click();
  
        cy.url().should('include', 'success');
      });
    });
  });
  