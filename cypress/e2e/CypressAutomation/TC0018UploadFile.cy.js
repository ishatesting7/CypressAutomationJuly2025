describe('File Upload', ()=>{

    it('File upload', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        const fileName = 'demoValue.json';
        cy.get('#file-upload').attachFile(fileName);
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').should('contain', fileName);

    })

    it('File upload - Renaming the file', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        const fileName = 'demoValue.json';
        cy.get('#file-upload').attachFile({filePath:'demoValue.json', fileName: 'renamedFile.json'});
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').should('contain', 'renamedFile.json');
    })
})