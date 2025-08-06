describe('Write Excel Test', () => {
    it('should write test result to Excel', () => {
      const output = [
        { testName: 'Registration', status: 'Passed', time: new Date().toISOString() }
      ];
  
      cy.task('writeExcel', {
        fileName: 'testResults.xlsx',
        sheetName: 'Results',
        data: output
      });
    });
  });
  