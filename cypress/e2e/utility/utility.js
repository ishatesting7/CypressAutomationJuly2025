//Calendar
//Date
//Timestamp
//Excel
//JSON
class utiltyDemo{

// 1. Enter text into input field
 enterText(selector, text) {
    cy.get(selector).clear().type(text);
  }
  
  // 2. Click on an element
   clickElement(selector) {
    cy.get(selector).click();
  }
  
  // 3. Select from dropdown
   selectDropdown(selector, optionText) {
    cy.get(selector).select(optionText);
  }
  
  // 4. Check a checkbox
   checkCheckbox(selector) {
    cy.get(selector).check();
  }
  
  // 5. Uncheck a checkbox
   uncheckCheckbox(selector) {
    cy.get(selector).uncheck();
  }
  
  // 6. Assert visibility
   isVisible(selector) {
    cy.get(selector).should('be.visible');
  }
  
  // 7. Assert element contains text
   hasText(selector, text) {
    cy.get(selector).should('contain.text', text);
  }
  
  // 8. Submit a form
   submitForm(selector) {
    cy.get(selector).submit();
  }
  
  // 9. Clear field
   clearField(selector) {
    cy.get(selector).clear();
  }
  
  // 10. Double click
   doubleClick(selector) {
    cy.get(selector).dblclick();
  }
  
  // 11. Right click
   rightClick(selector) {
    cy.get(selector).rightclick();
  }
  
  // 12. Hover
   hoverElement(selector) {
    cy.get(selector).trigger('mouseover');
  }
  
  // 13. Assert value
   hasValue(selector, value) {
    cy.get(selector).should('have.value', value);
  }
  
  // 14. Upload file
   uploadFile(selector, filePath, mimeType) {
    cy.get(selector).attachFile({ filePath, mimeType });
  }
  
  // 15. Wait for element
   waitForElement(selector, timeout = 10000) {
    cy.get(selector, { timeout }).should('be.visible');
  }
  
  // 16. Assert class
   hasClass(selector, className) {
    cy.get(selector).should('have.class', className);
  }
  
  // 17. Is disabled
   isDisabled(selector) {
    cy.get(selector).should('be.disabled');
  }
  
  // 18. Is enabled
   isEnabled(selector) {
    cy.get(selector).should('not.be.disabled');
  }
  
  // 19. Click by index
   clickElementByIndex(selector, index) {
    cy.get(selector).eq(index).click();
  }
  
  // 20. Wait for route alias
   waitForRoute(routeAlias) {
    cy.wait(`@${routeAlias}`);
  }
  
  // 21. Scroll into view
   scrollToElement(selector) {
    cy.get(selector).scrollIntoView();
  }
  
  
}

module.exports = new utiltyDemo();
