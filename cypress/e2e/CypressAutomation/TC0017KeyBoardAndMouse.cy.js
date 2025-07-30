describe('Mouse Operation', ()=>{

    //Click
    //DoubleClick
    //Mouse Hover
    //Right Click

    it('Click Event', ()=>{

        cy.visit('https://example.cypress.io/commands/actions');
        cy.get('.action-btn').click()

    cy.get('#action-canvas').click()

    cy.get('#action-canvas').click('topLeft')
cy.get('#action-canvas').click('top')
cy.get('#action-canvas').click('topRight')
cy.get('#action-canvas').click('left')
cy.get('#action-canvas').click('right')
cy.get('#action-canvas').click('bottomLeft')
cy.get('#action-canvas').click('bottom')
cy.get('#action-canvas').click('bottomRight')

// .click() accepts an x and y coordinate
// that controls where the click occurs :)

cy.get('#action-canvas')
cy.get('#action-canvas').click(80, 75) // click 80px on x coord and 75px on y coord
cy.get('#action-canvas').click(170, 75)
cy.get('#action-canvas').click(80, 165)
cy.get('#action-canvas').click(100, 185)
cy.get('#action-canvas').click(125, 190)
cy.get('#action-canvas').click(150, 185)
cy.get('#action-canvas').click(170, 165)

// click multiple elements by passing multiple: true
cy.get('.action-labels>.label').click({ multiple: true })

// Ignore error checking prior to clicking
cy.get('.action-opacity>.btn').click({ force: true })
    })

    it('Double Click', ()=>{

        cy.visit('https://example.cypress.io/commands/actions');

        // Our app has a listener on 'dblclick' event in our 'scripts.js'
// that hides the div and shows an input on double click
        cy.get('.action-div').dblclick()
        cy.get('.action-div').should('not.be.visible')
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('Right Click', ()=>{
        cy.visit('https://example.cypress.io/commands/actions');

        // Our app has a listener on 'contextmenu' event in our 'scripts.js'
// that hides the div and shows an input on right click
        cy.get('.rightclick-action-div').rightclick()
        cy.get('.rightclick-action-div').should('not.be.visible')
        cy.get('.rightclick-action-input-hidden').should('be.visible')
    })

    it('Mouse Hover', ()=>{

        cy.visit('https://tutorialsninja.com/demo/');

        cy.wait(5000);
        cy.get('.nav > :nth-child(2) > .dropdown-toggle').trigger('mouseover');
        

        //cy.press(Cypress.Keyboard.Keys.TAB)
        

        // LLM - ChatGPT, Gemini, DeepSeek, Perplexity AI 
        // LLM - Large Language Model - Content - Not Executing 
        // Agents - Agent will // execute the code and return the result
        // MCP - Model Context Protocol - Agent will take help of MCP

    })
})