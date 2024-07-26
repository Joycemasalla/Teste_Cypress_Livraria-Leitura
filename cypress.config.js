const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa eventos de node aqui
    },
    pageLoadTimeout: 120000, // Aumenta o tempo limite para 2 minutos (120000 ms)
  },
});
