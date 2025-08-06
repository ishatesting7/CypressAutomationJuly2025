const { defineConfig } = require("cypress");
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');

module.exports = defineConfig({

  reporter:'mochawesome',
  reporterOptions: {
    // Configuration for mochawesome reporter
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
    charts: true,
    inlineAssets: true,
    embeddedScreenshots: true,
    reportPageTitle: 'Cypress Automation Report',
    reportFilename: 'cypress-automation-report',
    quiet: true, // Suppress console logs
    code: true, // Include code in the report
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        readExcel({ fileName, sheetName }) {
          const filePath = path.resolve('cypress/fixtures', fileName);
          const file = fs.readFileSync(filePath);
          const workbook = XLSX.read(file, { type: 'buffer' });
          const worksheet = workbook.Sheets[sheetName || workbook.SheetNames[0]];
          return XLSX.utils.sheet_to_json(worksheet);
        },

        // Task to write data to Excel
        writeExcel({ fileName, sheetName, data }) {
          const filePath = path.resolve('cypress/fixtures', fileName);

          let workbook;
          if (fs.existsSync(filePath)) {
            const file = fs.readFileSync(filePath);
            workbook = XLSX.read(file, { type: 'buffer' });
          } else {
            workbook = XLSX.utils.book_new();
          }

          const worksheet = XLSX.utils.json_to_sheet(data);
          XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
          XLSX.writeFile(workbook, filePath);

          return null;
        }
      });
    },
    screenshotOnRunFailure:true, //This is for headless mode
    video:true,
    includeShadowDom: true, //This is for shadow dom
    retries:0,
    watchForFileChanges:false,
    env: {
      foo: 'bar',
      baz: 'quux',
    },
    baseUrl:'https://opensource-demo.orangehrmlive.com/web/index.php'
  },
});
