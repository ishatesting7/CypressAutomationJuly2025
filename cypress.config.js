const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
