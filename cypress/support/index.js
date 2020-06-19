import './commands'
import 'cypress-axe'

//Take screenshot on failure and attach to report
// const addContext = require("mochawesome/addContext")

const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let item = runnable
    const nameParts = [runnable.title]
    while (item.parent) {
      nameParts.unshift(item.parent.title)
      item = item.parent
    }
    if (runnable.hookName) {
      nameParts.push(`${runnable.hookName} hook`)
    }
    const fullTestName = nameParts.filter(Boolean).join(' -- ')
    const screenshotPath = `../cypress/snapshots/actual/${Cypress.spec.name}/${fullTestName} (failed).png`.replace("  ", " ")

    addContext({ test }, screenshotPath)
  }
})