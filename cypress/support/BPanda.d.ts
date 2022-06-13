declare namespace Cypress {
  interface Chainable {
    /**
     * BPanda login method
     *
     * @example cy.login(Cypress.env('adminEmail'), Cypress.env('adminPassword'));
     * @example cy.login('fnberger@mid.de', 'hahaverygoodpassword');
     * @param  email - the email used for login
     * @param  password - the password used for login
     */
    login(email?: string, password?: string): void;

    /**
     * BPanda logout method
     *
     * @example cy.logout();
     */
    logout(): void;

    /**
     * clicks global side menu button in BPanda
     *
     * @example cy.clickGlobalSideMenuBtn();
     */
    clickGlobalSideMenuBtn(): void;

    /**
     * closes the global side menu in BPanda
     *
     * @example cy.closeGlobalSideMenu();
     */
    closeGlobalSideMenu(): void;

    /**
     * Opens the\'more-options\'-dropdown menu on a specific process page
     *
     * @example cy.clickProcessMoreOptions();
     */
    clickProcessMoreOptions(): void;

    /**
     * BPanda-startpage --> importProcesses-page
     *
     * @example cy.gotoUserImportProcesses();
     */
    gotoUserImportProcesses(): void;

    /**
     * BPanda-startpage --> organizationalStructure-page
     *
     * @example cy.gotoOrgStructure();
     */
    gotoOrgStructure(): void;

    /**
     * BPanda-startpage --> processMap-page
     *
     * @example cy.gotoProcessMap();
     */
    gotoProcessMap(): void;

    /**
     * BPanda-startpage --> tasks-page
     *
     * @example cy.gotoTasks();
     */
    gotoTasks(): void;

    /**
     * BPanda-startpage --> specificOrgstructure-page
     *
     * @example cy.gotoOrgStructurePage('lolimaorgstructurename');
     * @param orgStructureName - the specific orgStructure which will be visited.
     */
    gotoOrgStructurePage(orgStructureName: string): void;

    /**
     * BPanda-startpage --> riskManagement-page
     *
     * @example cy.gotoRiskManagement();
     */
    gotoRiskManagement(): void;

    /**
     * BPanda-startpage --> riskAnalysisPageOfspecificProcess-page
     *
     * @example cy.gotoRiskAnalysis('Arbeiten bei der MID');
     * @example cy.gotoRiskAnalysis('Versand');
     * @param processName - the process that will be visited
     */
    gotoRiskAnalysis(processName: string): void;

    /**
     * BPanda-startpage --> processes-page
     *
     * @example cy.gotoProcesses();
     */
    gotoProcesses(): void;

    /**
     * BPanda-startpage --> specific Process-page
     *
     * @example cy.gotoProcessPage('Muffins backen');
     * @param processName - the process that will be visited
     */
    gotoProcessPage(processName: string): void;

    /**
     * BPanda-startpage --> specific ProcessReview-page
     *
     * @example cy.gotoProcessPage();
     * @param processName - the process that will be visited
     */
    gotoProcessReview(processName: string): void;

    /**
     * BPanda-startpage --> favorites-page
     *
     * @example cy.gotoFavorites();
     */
    gotoFavorites(): void;

    /**
     * BPanda-startpage --> recents-page
     *
     * @example cy.gotoRecents();
     */
    gotoRecents(): void;

    /**
     * BPanda-startpage --> reviews-page
     *
     * @example cy.gotoReviews();
     */
    gotoReviews(): void;

    /**
     * BPanda-startpage --> jobs-page
     *
     * @example cy.gotoJobs();
     */
    gotoJobs(): void;

    /**
     * BPanda-startpage --> drafts-page
     *
     * @example cy.gotoDrafts();
     */
    gotoDrafts(): void;

    /**
     * BPanda-startpage --> specific draft-page
     *
     * @example cy.gotoDrafts();
     */
    gotoDraftPage(draftName: string): void;

    /**
     * BPanda-startpage --> modeler-page via a newly created temporarily created draft
     *
     * @example cy.gotoModeler();
     */
    gotoModeler(): void;

    /**
     * BPanda-startpage --> manageProcesses-page
     *
     * @example cy.gotoManageProcesses();
     */
    gotoManageProcesses(): void;

    /**
     * BPanda-startpage --> manageProcessSpace-page
     *
     * @example cy.gotoManageProcessSpace();
     */
    gotoManageProcessSpace(): void;

    /**
     * BPanda-startpage --> manageAccount-page
     *
     * @example cy.gotoManageAccount();
     */
    gotoManageAccount(): void;

    /**
     * BPanda-startpage --> help-page
     *
     * @example cy.gotoHelp();
     */
    gotoHelp(): void;

    /**
     * brings the user back to the BPanda-startpage
     *
     * @example cy.gotoStartpage();
     */
    gotoStartpage(): void;

    /**
     * Selects/unselects a user/orgStructure/etc. in a \'select entity\'-dialog and saves the current status.\
     * This method assumes the iframed-version! The non-iframe method is called cy.workSelectUserDialogWithoutIframe();
     *
     * @example cy.selectUserDialog('portaluser1_aut@smartfacts.com');
     * @example cy.selectUserDialog('lolimaorgstructurename');
     * @param user - the specific entity that has to be selected/unselected
     */
    selectUserDialog(user: string): void;

    /**
     * checks if user can see the expected number of a specific process
     *
     * @example cy.checkCountOfSpecificProcess('Versand', 0);
     * @example cy.checkCountOfSpecificProcess('Arbeiten bei der MID', 3);
     * @param processName - the specific process
     * @param expectedVisibleProcesses - the expected number of available processes with the 'processName'-name to the logged in user
     */
    checkCountOfSpecificProcess(
      processName: string,
      expectedVisibleProcesses: string
    ): void;

    /**
     * checks if user can see the expected number of processes
     *
     * @example cy.verifyNumberOfProcesses(1);
     * @example cy.verifyNumberOfProcesses(0);
     * @example cy.verifyNumberOfProcesses(13);
     * @param expectedVisibleProcesses - the expected number of available processes to the logged in user
     */
    verifyNumberOfProcesses(expectedVisibleProcesses: string): void;
  }
}
