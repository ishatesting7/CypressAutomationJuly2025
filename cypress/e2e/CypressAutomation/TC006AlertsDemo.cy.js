describe('Javascript Alert', ()=>{


    it('Javascript Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert',(temp)=>{

            expect(temp).to.contain('I am a JS Alert');
        })
        cy.get('#result').should('have.text','You successfully clicked an alert');

    })


    it('Javascript Alert - Okay Click', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(temp)=>{

            expect(temp).to.contain('I am a JS Confirm');
        })
        cy.get('#result').should('have.text','You clicked: Ok');

    })

    it('Javascript Alert - Cancel Click', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(temp)=>{

            expect(temp).to.contain('I am a JS Confirm');
        })

        cy.on('window:confirm', ()=> false);

        cy.get('#result').should('have.text','You clicked: Cancel');

    })

    it('Javascript Alert - Prompt Window', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        
        cy.window().then((windo) =>{

            cy.stub(windo,'prompt').returns('I am new to Cypress');
        })
        
        cy.get('[onclick="jsPrompt()"]').click();

        cy.get('#result').should('have.text','You entered: I am new to Cypress');

    })
})