describe('Dropdown Automation – TestAutomationPractice ↓animals dropdown', () => {
    const selector = '#animals';
  
    beforeEach(() => {
      cy.visit('https://testautomationpractice.blogspot.com/');
    });
  
    it('should interact with the "Animals" dropdown in all useful ways', () => {
      cy.get(selector).should('be.visible').click();
  
      cy.get(selector).find('option:selected').then($opt => {
        const defaultText = $opt.text().trim();
        cy.log('Default selected option:', defaultText);
      });
  
      cy.get(selector).find('option').then($opts => {
        const texts = [...$opts].map(o => o.textContent.trim());
        cy.log('Dropdown options:', texts);
        expect(texts.length).to.be.greaterThan(1);
      });
  
      cy.get(selector).find('option').each(($opt) => {
        const optText = $opt.text().trim();
        if (optText) {
          cy.get(selector).select(optText);
          cy.get(selector).find('option:selected').should('have.text', optText);
        }
      });
  
      cy.get(selector).find('option').each(($opt) => {
        const value = $opt.attr('value');
        if (value) {
          cy.get(selector).select(value);
          cy.get(selector).should('have.value', value);
        }
      });
  
      cy.get(selector).find('option').then($opts => {
        const arr = [...$opts].map(o => o.textContent.trim()).filter(Boolean);
        const sorted = [...arr].sort();
        expect(arr).to.not.deep.equal(sorted);
      });
  
      cy.get(selector).focus().type('{downarrow}{downarrow}{enter}');
      cy.get(selector).find('option:selected').then($sel => {
        cy.log('Selected via keyboard:', $sel.text().trim());
      });
  
      const invalidOption = 'NotAnAnimal';
      cy.get(selector).then($select => {
        const opts = [...$select[0].options].map(o => o.text.trim());
        if (opts.includes(invalidOption)) {
          cy.wrap($select).select(invalidOption);
        } else {
          cy.log(`Option "${invalidOption}" not present — skipping selection.`);
        }
      });
    });
  });
  