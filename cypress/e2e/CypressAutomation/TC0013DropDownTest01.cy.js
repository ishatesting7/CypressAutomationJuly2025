describe('Facebook Signup - Dropdown Scenarios', () => {
    beforeEach(() => {
      // Visit the signup page before each test
      cy.visit('https://www.facebook.com/r.php?entry_point=login');
    });
  
    it('Handles all dropdown scenarios for Date of Birth', () => {
      // 🔽 Scenario 1: Select values by visible text
      cy.get('#day').select('15');
      cy.get('#month').select('May');
      cy.get('#year').select('1990');
  
      // 🔢 Scenario 2: Select values by value attribute
      cy.get('#day').select('20');
      cy.get('#month').select('10'); // October
      cy.get('#year').select('1985');
  
      // 🔁 Scenario 3: Loop through all day options and log them
      cy.get('#day').find('option').each(($el, index) => {
        cy.wrap($el).invoke('text').then((text) => {
          cy.log(`Day option ${index + 1}: ${text.trim()}`);
        });
      });
  
      // 📦 Scenario 4: Assert default selected value (reloading the page to reset selections)
      cy.reload();
      cy.get('#day').should('have.value', '0');
      cy.get('#month').should('have.value', '0');
      cy.get('#year').should('have.value', '0');
  
      // 🔍 Scenario 5: Verify the 'Mar' option exists in the month dropdown
      cy.get('#month').find('option').should('contain.text', 'Mar');
  
      // 🚫 Scenario 6: Try selecting an invalid value (negative test)
      // Cypress will throw error if value does not exist; we catch it gracefully
      cy.get('#day').select('31'); // Valid
      cy.get('#day').select('32').then(() => {
        // Won't happen
      }).catch((err) => {
        cy.log('Caught expected error for invalid option');
      });
  
      // 📑 Scenario 7: Capture selected value and use it later
      cy.get('#year').select('2000').invoke('val').as('selectedYear');
      cy.get('@selectedYear').then((year) => {
        expect(year).to.equal('2000');
      });
  
      // ⏬ Scenario 8: Dynamic dropdown placeholder (example only)
      // Not applicable on this page, but here’s how it might look:
      // cy.get('#country').select('United States');
      // cy.get('#state').should('not.be.disabled');
    });
  });
  