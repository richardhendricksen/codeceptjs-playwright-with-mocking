# Frontend integration testframeowrk with CodeceptJS and Playwright [![Build Status](https://github.com/richardhendricksen/codeceptjs-playwright-with-mocking/workflows/CI/badge.svg)](https://github.com/richardhendricksen/codeceptjs-playwright-with-mocking/actions?query=workflow%3ACI)

Read more about it in my blog post [here](https://medium.com/@richard.hendricksen/setting-up-codeceptjs-playwright-integration-test-framework-with-mocking-support-f3cb53127ec4).

# Run
`npm test` / `yarn test`: To run the tests.

# Developing
## Mocking
Add new endpoints to the `endpoints.ts` file.  It contains of a regex string that matches the url, the HTTP method used (not used by Playwright) en the base folder for the scenario's.  

Add scenario's for an endpoint in the designated base folder. Then mock the endpoint using `await I.mockEndpoint(<endpoint>>, <scenario>>);` 

## Linting
`npm run lint` / `yarn lint`: To lint the typescript files

