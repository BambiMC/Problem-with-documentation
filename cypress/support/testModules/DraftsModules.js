Cypress.Commands.add('draftsClickCreateNewDraft', () => {
    cy.getIframe().find('mat-card').contains('Neuen Entwurf erstellen').click();
    cy.wait(6000);
})

Cypress.Commands.add('draftsChangeDraftName', (name) => {
    expect(name).to.not.equal(undefined);
    cy.getIframe().find('.title').click();
    cy.getIframe().find('div.header-content input').type(name);
    cy.getIframe().find('.edit-buttons.ng-star-inserted > button:nth-of-type(2)').click();
})

Cypress.Commands.add('draftsOpenHappyPath', () => {
    cy.getIframe().find('div:nth-of-type(2) > mat-card:nth-of-type(1)').click();
})

Cypress.Commands.add('draftsInputHappyPath', (isFirstInput, steps) => {
    expect(isFirstInput).to.be.oneOf([true, false]);
    expect(steps).to.not.equal(undefined);
    if (!isFirstInput) {
        cy.getIframe().find('bpanda-task-list button.add-new-task-button').click();
    }
    for (const step of steps) {
        if (step[0] != '') {
            cy.getIframe().find('mat-table > mat-row:last-of-type > mat-cell:nth-of-type(2) input').type(step[0]);
        }
        if (step[1] != '') {
            cy.getIframe().find('mat-table > mat-row:last-of-type > mat-cell:nth-of-type(3) input').type(step[1]);
        }
        if (step[2] != '') {
            cy.getIframe().find('mat-table > mat-row:last-of-type > mat-cell:nth-of-type(4) input').clear().type(step[2]);
        }
        cy.getIframe().find('bpanda-task-list button.add-new-task-button').click();
    }
    cy.getIframe().find('mat-table > mat-row:last-of-type button.mat-menu-trigger').click();
    cy.getIframe().find('.ng-trigger-transformMenu button:nth-of-type(3)').click();
})

Cypress.Commands.add('draftsCheckHappyPath', (steps) => {
    expect(steps).to.not.equal(undefined);
    var j = 1;
    for (var i = 0; i < steps.length; i++) {
        cy.getIframe().find('mat-table > mat-row:nth-of-type(' + j + ') > mat-cell:nth-of-type(2) input').should('have.value', steps[i][0]);
        cy.getIframe().find('mat-table > mat-row:nth-of-type(' + j + ') > mat-cell:nth-of-type(3) input').should('have.value', steps[i][1]);
        cy.getIframe().find('mat-table > mat-row:nth-of-type(' + j + ') > mat-cell:nth-of-type(4) input').should('have.value', steps[i][2]);
        j++;
    }
})

Cypress.Commands.add('draftsOpenModeler', (FirstTimeSetupScreen = false) => {
    expect(FirstTimeSetupScreen).to.be.oneOf([true, false]);
    if (FirstTimeSetupScreen) {
        cy.getIframe().find('bpanda-draft-decision-block mat-card:nth-child(2)').click();
    } else {
        cy.getIframe().then(mainPage => {
            if (mainPage.find('.bpmn-lint-button').length == 0) {
                cy.getIframe().contains('Modeler öffnen').click();
            }
        })
    }
    cy.wait(5000);
})

Cypress.Commands.add('draftsCheckName', (draftName) => {
    expect(draftName).to.not.equal(undefined);
    cy.getIframe().find('.title').contains(draftName);
})