import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 200000,
  viewportWidth: 1280,
  viewportHeight: 1024,
  env: {
    adminEmail: "dev.aut@smartfacts.com",
    adminPassword: "BigBalls1337!",
    userEmail: "demo.swang@smartfacts.com",
    userEmail1: "portaluser1_aut@smartfacts.com",
    userEmail2: "portaluser2_aut@smartfacts.com",
    userEmail3: "portaluser3_aut@smartfacts.com",
    userEmail4: "portaluser4_aut@smartfacts.com",
    designerEmail: "demo.clange@smartfacts.com",
    designerEmail1: "processdesigner1_aut@smartfacts.com",
    designerEmail2: "processdesigner2_aut@smartfacts.com",
    designerEmail3: "processdesigner3_aut@smartfacts.com",
    designerEmail4: "processdesigner4_aut@smartfacts.com",
    password: "Asdf1234!",
    warehouseId: "99572a91-9a4d-4690-bb14-47d0ac3254ff",
    apiBase: "https://docker01.mid.de:26443/bpm/api/v1",
    api: "https://docker01.mid.de:26443/bpm/api/v1/warehouses/PS-001-99572a91-9a4d-4690-bb14-47d0ac3254ff",
    identityDomainName: "identity-test",
    identityDomain: "https://identity-test.mid.de",
    apiAccounts:
      "https://identity-test.mid.de/subapi/api/accounts/99572a91-9a4d-4690-bb14-47d0ac3254ff",
    "15backspace":
      "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}",
    "25backspace":
      "{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}",
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },

  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/junit-test-output.xml",
    toConsole: true,
  },
  e2e: {
    baseUrl: "https://docker01.mid.de:26443",
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    //setupNodeEvents(on, config) {
    //  return require("./cypress/plugins/index.js")(on, config);
    //},
  },
});
