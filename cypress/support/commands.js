// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@4tw/cypress-drag-drop'

Cypress.Commands.add('loginIntoOrangeHRMS',(username, password)=>{

    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password, {log:false});
    cy.get('[type="submit"]').click({force:true});
})


// 1. Type into input
Cypress.Commands.add('enterText', (selector, text) => {
    cy.get(selector).clear().type(text);
  });
  
  // 2. Click a button or element
  Cypress.Commands.add('clickElement', (selector) => {
    cy.get(selector).click();
  });
  
  // 3. Select dropdown option by text
  Cypress.Commands.add('selectDropdown', (selector, optionText) => {
    cy.get(selector).select(optionText);
  });
  
  // 4. Check a checkbox
  Cypress.Commands.add('checkCheckbox', (selector) => {
    cy.get(selector).check();
  });
  
  // 5. Uncheck a checkbox
  Cypress.Commands.add('uncheckCheckbox', (selector) => {
    cy.get(selector).uncheck();
  });
  
  // 6. Assert element is visible
  Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector).should('be.visible');
  });
  
  // 7. Assert element contains text
  Cypress.Commands.add('hasText', (selector, text) => {
    cy.get(selector).should('contain.text', text);
  });
  
  // 8. Submit a form
  Cypress.Commands.add('submitForm', (selector) => {
    cy.get(selector).submit();
  });
  
  // 9. Clear input field
  Cypress.Commands.add('clearField', (selector) => {
    cy.get(selector).clear();
  });
  
  // 10. Double-click an element
  Cypress.Commands.add('doubleClick', (selector) => {
    cy.get(selector).dblclick();
  });
  
  // 11. Right-click an element
  Cypress.Commands.add('rightClick', (selector) => {
    cy.get(selector).rightclick();
  });
  
  // 12. Hover over an element
  Cypress.Commands.add('hoverElement', (selector) => {
    cy.get(selector).trigger('mouseover');
  });
  
  // 13. Assert input field value
  Cypress.Commands.add('hasValue', (selector, value) => {
    cy.get(selector).should('have.value', value);
  });
  
  // 14. Upload a file
  Cypress.Commands.add('uploadFile', (selector, filePath, mimeType) => {
    cy.get(selector).attachFile({ filePath, mimeType });
  });
  
  // 15. Wait for element to appear
  Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should('be.visible');
  });
  
  // 16. Assert element has CSS class
  Cypress.Commands.add('hasClass', (selector, className) => {
    cy.get(selector).should('have.class', className);
  });
  
  // 17. Assert element is disabled
  Cypress.Commands.add('isDisabled', (selector) => {
    cy.get(selector).should('be.disabled');
  });
  
  // 18. Assert element is enabled
  Cypress.Commands.add('isEnabled', (selector) => {
    cy.get(selector).should('not.be.disabled');
  });
  
  // 19. Click element by index
  Cypress.Commands.add('clickElementByIndex', (selector, index) => {
    cy.get(selector).eq(index).click();
  });
  
  // 20. Wait for route/navigation
  Cypress.Commands.add('waitForRoute', (routeAlias) => {
    cy.wait(`@${routeAlias}`);
  });
  
  // 21. Scroll to element
  Cypress.Commands.add('scrollToElement', (selector) => {
    cy.get(selector).scrollIntoView();
  });
  