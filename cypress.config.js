import { defineConfig } from "cypress";
import cucumber from "./cypress/plugins/index.js";

export default defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      return cucumber(on, config);
    },

    specPattern: 'cypress/e2e/**/*.feature',

    supportFile: false
  },
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  }

});
