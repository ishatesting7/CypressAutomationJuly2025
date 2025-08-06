describe('Register Users from Excel with Unique Emails and Update Excel', () => {
    const fileName = 'registerData.xlsx';
    const sheetName = 'Users';
  
    it('Registers users with unique emails and writes result back to Excel', () => {
      cy.task('readExcel', { fileName, sheetName }).then((users) => {
        const updatedUsers = [];
  
        users.forEach((user, index) => {
          const timestamp = Date.now() + index; // ensure uniqueness
          const uniqueEmail = `user_${timestamp}@example.com`;
          user.email = uniqueEmail; // override email in memory
  
          cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
  
          cy.get('#input-firstname').type(user.FirstName);
          cy.get('#input-lastname').type(user.LastName);
          cy.get('#input-email').type(user.Email);
          cy.get('#input-telephone').type(user.Telephone);
          cy.get('#input-password').type(user.Password);
          cy.get('#input-confirm').type(user.Password);
          cy.get('[name="agree"]').check();
          cy.get('input[type="submit"]').click();
  
          cy.url().then((url) => {
            if (url.includes('success')) {
              user.Status = 'Registered';
            } else {
              user.Status = 'Failed';
            }
  
            // Save the actual email used for traceability
            user.generatedEmail = uniqueEmail;
  
            updatedUsers.push(user);
          });
        });
  
        // Wait for all iterations to finish before writing back
        cy.then(() => {
          cy.task('writeExcel', {
            fileName,
            sheetName,
            data: updatedUsers
          });
        });
      });
    });
  });
  