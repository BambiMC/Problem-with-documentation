before('Reset Nightly, test preparation and rest login', () => {
    cy.sshResetNightly_PC25();
    //cy.sshResetNightly_dev();
    //cy.genSetVars_dev('identity-test', 'https://docker02.mid.de:14443');
    cy.genSetRunEnvVar();
    cy.restLogin();
})

describe('Overview', () => {

    it('Create new draft, set process name and Add some tasks via Happy Path', () => {
        cy.login();
        cy.gotoDrafts();
        cy.draftsClickCreateNewDraft();
        cy.draftsChangeDraftName('SkyFactory 2.5: Vom Oak Sapling zum Iron Sapling');
        cy.modelerSave();
        cy.gotoDraftPage('SkyFactory 2.5: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenHappyPath();
        let stepsIncomplete = [
            ['Produce an oak tree', 'Plant Sapling and wait for it to grow', 'time / bone meal'],
            ['Get an apple', 'Cut down the tree and be lucky to receive an apple', 'luck'],
            ['Get an apple seed', 'Stomp the apple', 'You!'],
            ['Produce an apple tree', 'Plant Sapling and wait for it to grow', 'time / bone meal'],
            ['Get an apple sapling', 'Cut down the tree and be lucky to receive an apple sapling', 'luck'],
            ['Get an acacia sapling', 'Stomp the apple sapling with water in a cauldron', 'You!'],
            ['Build a tinkers construct smeltery', 'Can be made out of seared or porcelain bricks', ''],
            ['Get an iron sapling', 'Pour 1 iron ingot onto the acacia sapling', 'You! / smeltery']
        ]
        cy.draftsInputHappyPath(true, stepsIncomplete);
        cy.modelerSave();
        cy.modelerSave('SkyFactory 4: Vom Oak Sapling zum Iron Sapling')
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        let stepsComplete = [
            ['Produce an oak tree', 'Plant Sapling and wait for it to grow', 'time / bone meal'],
            ['Get an apple', 'Cut down the tree and be lucky to receive an apple', 'luck'],
            ['Get an apple seed', 'Stomp the apple', 'You!'],
            ['Produce an apple tree', 'Plant Sapling and wait for it to grow', 'time / bone meal'],
            ['Get an apple sapling', 'Cut down the tree and be lucky to receive an apple sapling', 'luck'],
            ['Get an acacia sapling', 'Stomp the apple sapling with water in a cauldron', 'You!'],
            ['Build a tinkers construct smeltery', 'Can be made out of seared or porcelain bricks', 'You!'],
            ['Get an iron sapling', 'Pour 1 iron ingot onto the acacia sapling', 'You! / smeltery']
        ]
        cy.draftsCheckHappyPath(stepsComplete);
        cy.draftsCheckName('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');

    })
})

describe('Check Modeler', () => {
    it('Check draft name in drafts & modeler and test process properties', () => {
        cy.login();
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsCheckName('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenModeler();
        cy.modelerCheckDraftName('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.modelerSwitchProcessPropertyPage('Globale und lokale Eigenschaften');
        cy.modelerInputProcessProperty('Inventarslot 1', '3 Birch log', true);
        cy.modelerInputProcessProperty('Inventarslot 2', '2 Sticks');
        cy.modelerInputProcessProperty('Inventarslot 3', '1 Blaze Rod');
        cy.modelerInputProcessProperty('Inventarslot 4', '5 Unfired Clay Bucket');
        cy.modelerInputProcessProperty('Inventarslot 5', '17 Raw Chicken');
        cy.modelerInputProcessProperty('Inventarslot 6', '3 Emeralds');
        cy.modelerInputProcessProperty('Inventarslot 7', '1 Copper Sword');
        cy.modelerInputProcessProperty('Inventarslot 8', '69 Tin');
        cy.modelerInputProcessProperty('Inventarslot 9', '64 Nickel');
        cy.modelerSave();
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenModeler();
        cy.modelerSwitchProcessPropertyPage('Globale und lokale Eigenschaften');
        cy.modelerCheckProcessProperty('Inventarslot 1', '3 Birch log', 1);
        cy.modelerCheckProcessProperty('Inventarslot 2', '2 Sticks', 2);
        cy.modelerCheckProcessProperty('Inventarslot 3', '1 Blaze Rod', 3);
        cy.modelerCheckProcessProperty('Inventarslot 4', '5 Unfired Clay Bucket', 4);
        cy.modelerCheckProcessProperty('Inventarslot 5', '17 Raw Chicken', 5);
        cy.modelerCheckProcessProperty('Inventarslot 6', '3 Emeralds', 6);
        cy.modelerCheckProcessProperty('Inventarslot 7', '1 Copper Sword', 7);
        cy.modelerCheckProcessProperty('Inventarslot 8', '69 Tin', 8);
        cy.modelerCheckProcessProperty('Inventarslot 9', '64 Nickel', 9);
    })
    it('Test diagram created by Happy Path', () => {
        cy.login();
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenModeler();
        cy.modelerCheckLanesExist(['time / bone meal', 'luck', 'You!', 'You! / smeltery']);
        cy.modelerCheckTasksExist(['Produce an oak tree', 'Get an apple', 'Get an apple seed', 'Produce an apple tree',
            'Get an apple sapling', 'Get an acacia sapling', 'Build a tinkers construct smeltery', 'Get an iron sapling']);
        //TODO hier gibts noch jede Menge mehr zu testen und auch sinnvoll, weil alles bereits in iframe
    })

    it('Test deletion of diagram, dont save, check Error Count and exisiting lanes', () => {
        cy.login();
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenModeler();
        cy.modelerCheckCurrentErrorCount(3);
        cy.modelerNewDraft();
        cy.modelerCheckCurrentErrorCount();
        cy.modelerCheckLanesExist(['time / bone meal', 'luck', 'You!', 'You! / smeltery'], false);
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.modelerCheckCurrentErrorCount(3);
        cy.modelerCheckLanesExist(['time / bone meal', 'luck', 'You!', 'You! / smeltery']);
    })

    it('Change process properties, save and export as bpmn', () => {
        cy.login();
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenModeler();
        cy.modelerSwitchProcessPropertyPage('Globale und lokale Eigenschaften');
        cy.modelerChangeProcessProperty('Inventarslot 1', '3 Birch log', ' modifiziert', '3 Tartarite blocks', 1);
        cy.modelerChangeProcessProperty('Inventarslot 7', '1 Copper Sword', ' modifiziert', '1 Tartarite sword', 7);
        cy.modelerChangeProcessProperty('Inventarslot 9', '64 Nickel', ' modifiziert', '64 Tartarite', 9);
        cy.modelerCheckProcessProperty('Inventarslot 1 modifiziert', '3 Tartarite blocks', 1);
        cy.modelerCheckProcessProperty('Inventarslot 7 modifiziert', '1 Tartarite sword', 7);
        cy.modelerCheckProcessProperty('Inventarslot 9 modifiziert', '64 Tartarite', 9);
        cy.modelerSave();
        cy.modelerExportAs('BPMN');
    })

    it('Delete end event, add task to last event and add event and end event, save, check and then export as bpmn', () => {
        cy.login();
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenModeler();
        cy.modelerCheckCurrentErrorCount(3);
        cy.modelerDeleteOnlyEndEvent();
        cy.modelerCheckCurrentErrorCount(3);

        cy.modelerAppendElementToTask('Build a tinkers construct smeltery', 'Melt every amber here, that doubles the output to two ingots!', 'Zwischen- oder Randereignis');
        cy.modelerCheckCurrentErrorCount(4);
        cy.modelerAppendElementToTask('Get an acacia sapling', 'Try and get other saplings aswell', 'Gateway');
        cy.modelerCheckCurrentErrorCount(6, 1);
        //FIXME ist ein bug hier, bereits eingetragen, daher der nächste Teil auskommentiert
        /*cy.modelerAppendElementToTask('Produce an apple tree', 'Ein random Prozess', 'Aufrufaktivität', undefined, 'Entwürfe', 'SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.modelerCheckCurrentErrorCount(7, 1);
        cy.modelerAppendElementToTask('Build a tinkers construct smeltery', 'Always check smeltery capacity!', 'Anmerkung');
        cy.modelerCheckCurrentErrorCount(7, 1);
        cy.modelerAppendElementToTask('Get an iron sapling', 'Thanks for playing ^^', 'Endereignis');
        cy.modelerCheckCurrentErrorCount(6, 1);*/

        //cy.modelerSave();
        //cy.modelerCheckEventsExist(['Dont forget to eat', 'something!', 'Thanks for playing', '^^']);
        cy.modelerImport('cypress/downloads/SkyFactory 4_ Vom Oak Sapling zum Iron Sapling.bpmn');
        cy.modelerCheckTasksExist(['Melt every amber here, that doubles the output to two ingots!', 'Thanks for playing ^^'], false);
    })

    it('Check state after modification, import saved state, check the import and save the current state', () => {
        cy.login();
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenModeler();
        cy.modelerCheckCurrentErrorCount(3);
        cy.modelerCheckEventsExist(['Dont forget to eat', 'something!', 'Thanks for playing', '^^'], false);
        cy.modelerImport('cypress/downloads/SkyFactory 4_ Vom Oak Sapling zum Iron Sapling.bpmn');
        cy.modelerCheckTasksExist(['Melt every amber here, that doubles the output to two ingots!', 'Thanks for playing ^^'], false);
        cy.modelerSave();
    })

    it('Check current state after import and relogin, then submit as new version', () => {
        cy.login();
        cy.gotoDraftPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenModeler();
        cy.modelerCheckCurrentErrorCount(3);
        cy.modelerCheckTasksExist(['Melt every amber here, that doubles the output to two ingots!', 'Thanks for playing ^^'], false);
        cy.modelerSubmit();
        cy.processCheckProcessName('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
    })

    it.only('Check newly created process', () => {
        cy.login();
        cy.gotoProcessPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.processCheckProcessName('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.processCheckProcessStateLabel('Importiert');

    })

    it.skip('', () => {
        cy.login();
        cy.gotoProcessPage('SkyFactory 4: Vom Oak Sapling zum Iron Sapling');
        cy.draftsOpenModeler();
    })

})