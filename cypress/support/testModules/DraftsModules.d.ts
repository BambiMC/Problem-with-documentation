declare namespace Cypress {
  interface Chainable {
    /**
     * Clicks the button to create a new draft on the draft page
     *
     * @example cy.draftsClickCreateNewDraft();
     */
    draftsClickCreateNewDraft(name: string): void;

    /**
     * changes the name of a draft while on draft creation page
     *
     * @example cy.draftsChangeDraftName('Kuchenrezept');
     * @example cy.draftsChangeDraftName('Arbeiten bei der MID');
     * @param  -
     */
    draftsChangeDraftName(name: string): void;

    /**
     * Opens the Happy Path Creator while on setup new draft-page
     *
     * @example cy.draftsOpenHappyPath();
     */
    draftsOpenHappyPath(name: string): void;

    /**
     * inputs happy path information in the happy path creator
     *
     * @example cy.draftsInputHappyPath(true, ['Produce an oak tree', 'Plant Sapling and wait for it to grow', 'time / bone meal'],
            ['Get an apple', 'Cut down the tree and be lucky to receive an apple', 'luck'],
            ['Get an apple seed', 'Stomp the apple', 'You!'],
            ['Produce an apple tree', 'Plant Sapling and wait for it to grow', 'time / bone meal'],
            ['Get an apple sapling', 'Cut down the tree and be lucky to receive an apple sapling', 'luck'],
            ['Get an acacia sapling', 'Stomp the apple sapling with water in a cauldron', 'You!'],
            ['Build a tinkers construct smeltery', 'Can be made out of seared or porcelain bricks', ''],
            ['Get an iron sapling', 'Pour 1 iron ingot onto the acacia sapling', 'You! / smeltery']);
     * @example cy.draftsInputHappyPath(false, ['After all those other steps, finish the game!', 'Defeat the Nether dragon, wait what?', 'beds seem to be a good idea ^^']);
     * @param isFirstInput - is this the first input of the draft?
     * @param steps - Given as a 2D Array, look at example
     */
    draftsInputHappyPath(isFirstInput: boolean, steps: string[][]): void;

    /**
     * Open the modeler from the draft-page, depends if draft is in the setup stage
     *
     * @example cy.draftsOpenModeler(false);
     * @example cy.draftsOpenModeler(true);
     * @param FirstTimeSetupScreen - is this draft just being created?
     */
    draftsOpenModeler(FirstTimeSetupScreen?: boolean): void;

    /**
     * checks happy path information in the happy path creator
     *
     * @example cy.draftsCheckHappyPath(true, ['Produce an oak tree', 'Plant Sapling and wait for it to grow', 'time / bone meal'],
            ['Get an apple', 'Cut down the tree and be lucky to receive an apple', 'luck'],
            ['Get an apple seed', 'Stomp the apple', 'You!'],
            ['Produce an apple tree', 'Plant Sapling and wait for it to grow', 'time / bone meal'],
            ['Get an apple sapling', 'Cut down the tree and be lucky to receive an apple sapling', 'luck'],
            ['Get an acacia sapling', 'Stomp the apple sapling with water in a cauldron', 'You!'],
            ['Build a tinkers construct smeltery', 'Can be made out of seared or porcelain bricks', ''],
            ['Get an iron sapling', 'Pour 1 iron ingot onto the acacia sapling', 'You! / smeltery']);
     * @example cy.draftsCheckHappyPath(false, ['After all those other steps, finish the game!', 'Defeat the Nether dragon, wait what?', 'beds seem to be a good idea ^^']);
     * @param isFirstInput - is this the first input of the draft?
     * @param steps - Given as a 2D Array, look at example
     */
    draftsCheckHappyPath(isFirstInput: boolean, steps: string[][]): void;

    /**
     * opens the modeler, functionality depends on the current page
     *
     * @example cy.draftsOpenModeler(true);
     * @example cy.draftsOpenModeler(false);
     * @param FirstTimeSetupScreen - currently opened up a new draft?
     */
    draftsOpenModeler(FirstTimeSetupScreen: string): void;

    /**
     *
     *
     * @example cy.draftsCheckName('Die Kuh macht Muh');
     * @example cy.draftsCheckName('Die Muh macht Kuh');
     * @param draftName - name of the draft
     */
    draftsCheckName(draftName: string): void;
  }
}
