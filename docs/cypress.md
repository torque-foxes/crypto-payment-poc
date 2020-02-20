## Acceptance Testing with Cypress

Cypress with cucumber is setup and ready to go. To run the tests you will need to:

- Ensure you have copied the cypress config (cp cypress.env.json.dist cypress.env.json`) and set the base URL to your local url
- Run `yarn e2e`.

Alternatively, you can run selected tests via the Cypress Test Runner with the command `yarn cypress open`