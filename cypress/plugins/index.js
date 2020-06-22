/// <reference types="cypress" />
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');
 
module.exports = (on) => {
  getCompareSnapshotsPlugin(on);
};
