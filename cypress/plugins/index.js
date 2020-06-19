/// <reference types="cypress" />
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  //visual regression
  getCompareSnapshotsPlugin(on);
}