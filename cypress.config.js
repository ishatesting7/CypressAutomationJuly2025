const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //retries:4,
    watchForFileChanges:false,
    env: {
      foo: 'bar',
      baz: 'quux',
    },
  },
});
