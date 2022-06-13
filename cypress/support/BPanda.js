Cypress.Commands.add('login', (email = Cypress.env('adminEmail'), password = Cypress.env('adminPassword')) => {
    cy.genOpenWebsite();
    cy.get('input#UserName').type(email);
    cy.get('input#Password').type(password);
    cy.get('.sf-btn').click('center');
    cy.wait(10000);
    //TODO von 7 auf 10 erhöht wegen langsamem laptop
})

Cypress.Commands.add('logout', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('.user-section > .dropdown-button > .material-icons').click();
    cy.wait(1000);
    cy.get('#user-menu > :nth-child(4) > .ng-scope').click();
})

Cypress.Commands.add('clickGlobalSideMenuBtn', () => {
    cy.get('.menu-button > .material-icons').click();
    cy.wait(3000);
})

Cypress.Commands.add('closeGlobalSideMenu', () => {
    cy.get('ul#nav-mobile > li:nth-of-type(1)').click();
    cy.wait(3000);
})

Cypress.Commands.add('clickProcessMoreOptions', () => {
    cy.getIframe().find('.header-buttons > button:nth-of-type(3)').click();
    cy.wait(1000);
})

//GOTOs
Cypress.Commands.add('gotoUserImportProcesses', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/import\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoOrgStructure', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/orgstructure\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoTasks', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/timeline\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoOrgStructurePage', (orgStructureName) => {
    expect(orgStructureName).to.not.equal(undefined);
    cy.gotoOrgStructure();
    cy.getIframe().find('mat-tree-node').contains(orgStructureName).click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoRiskManagement', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/manage\/improvements\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoProcessMap', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/processmap\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoRiskAnalysis', (processName) => {
    expect(processName).to.not.equal(undefined);
    cy.gotoProcessPage(processName);
    cy.getIframe().find('.header-buttons button:nth-of-type(3)').click();
    cy.getIframe().find('.mat-menu-content').contains('Risiken analysieren').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoProcesses', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/myprocesses\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoProcessPage', (processName) => {
    expect(processName).to.not.equal(undefined);
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'/myprocesses\']').click();
    cy.get('.process-url').contains(processName).click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoProcessReview', (processName) => {
    expect(processName).to.not.equal(undefined);
    cy.gotoReviews();
    cy.get('.card > .card-image').contains(processName).click({ force: true });
})

Cypress.Commands.add('gotoFavorites', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/favorites\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoRecents', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/recentlyvisited\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoReviews', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/allReviews\']').click();
    cy.wait(4000);
})

Cypress.Commands.add('gotoJobs', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/jobs\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoDrafts', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/drafts\']').click();
    cy.wait(15000);
    //TODO excessive timeout because of slow laptop
})

Cypress.Commands.add('gotoDraftPage', (draftName) => {
    cy.gotoDrafts();
    cy.getIframe().find('mat-card').contains(draftName).click();
    cy.wait(15000);
    //TODO excessive timeout because of slow laptop
})

Cypress.Commands.add('gotoModeler', () => {
    cy.gotoDrafts();
    cy.draftsClickCreateNewDraft();
    cy.draftsOpenModeler();
    cy.wait(5000);
})

Cypress.Commands.add('gotoManageProcesses', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/manage\/processes\']').click();
    cy.wait(4000);
})

Cypress.Commands.add('gotoManageProcessSpace', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/manage\/processspace\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoManageAccount', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'https:\/\/docker01.mid.de:26001\/accounts\/99572a91-9a4d-4690-bb14-47d0ac3254ff\/manage\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoHelp', () => {
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'https:\/\/help.bpanda.com\']').click();
    cy.wait(8000);
})

Cypress.Commands.add('gotoStartpage', () => {
    cy.visit(Cypress.config().baseUrl);
    cy.wait(12000);
})

Cypress.Commands.add('selectUserDialog', (user) => {
    expect(user).to.not.equal(undefined);
    cy.getIframe().find('mat-dialog-container input[class~=mat-input-element]').type(user);
    cy.getIframe().find('mat-dialog-container .cdk-virtual-scroll-content-wrapper').click();
    cy.getIframe().contains('Auswahl übernehmen').click();
    cy.wait(2500);
})

Cypress.Commands.add('checkCountOfSpecificProcess', (processName, expectedVisibleProcesses) => {
    expect(processName).to.not.equal(undefined);
    expect(expectedVisibleProcesses).to.not.equal(undefined);
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'/myprocesses\']').click();
    cy.get('bpanda-process-info .row > div').contains(processName).should('have.length', expectedVisibleProcesses);
    cy.wait(8000);
})

Cypress.Commands.add('verifyNumberOfProcesses', (expectedVisibleProcesses) => {
    expect(expectedVisibleProcesses).to.not.equal(undefined);
    cy.clickGlobalSideMenuBtn();
    cy.get('#nav-mobile [href*=\'\/myprocesses\'] .badge').should('have.text', expectedVisibleProcesses);
    cy.get('#sidenav-overlay').click();
})
