describe('Drag and Drop', ()=>{

    it('Drag and Drop', ()=>{

        cy.visit('https://demo.automationtesting.in/Static.html');

        cy.wait(3000);

       //cy.get('').trigger('drag')
        cy.get('#angular').drag('#droparea');

        cy.wait(3000);

        cy.get('#mongo').drag('#droparea');

        cy.wait(3000);


    })
})