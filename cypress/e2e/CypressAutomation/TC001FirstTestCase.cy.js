describe('example to-do app', function() {
    
    it('displays two todo items by default', () => {
        
    /*  

    visit - cy.visit("Navigate to particular URL")

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    qa - qa.amazon.com
    stage - stage.amazon.com
    preprod - preprod.amazon.com


    cy.get('locator') - css 

    */
     cy.visit('https://example.cypress.io/todo')
     cy.get('.todo-list li').click();
    
    
    })
  
   
  })
  