describe('Handle WebTables', ()=>{

    beforeEach('Handle WebTables', ()=>{

        cy.visit('https://demo3x.opencartreports.com/admin/index.php');

        cy.get('#input-username').type('demo');

        cy.get('#input-password').type('demo');

        cy.get('[type="submit"]').click();

        cy.get('#menu-customer>a').click();
        cy.get('#menu-customer>ul>li:nth-child(1)').click();
        
    })

    it('Count the number of Rows and Columns', ()=>{
       
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .should('have.length','7');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td')
        .should('have.length','10');

    })

    it('Count the number of Rows and Columns - Get at Runtime', ()=>{
       
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .then( rowC =>{

            const rowCount = rowC.length;
            cy.log(rowCount);

            expect(rowCount).to.be.greaterThan(0);

        })
        
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td')
        .then( columnC =>{

            const columnCount = columnC.length;
            cy.log(columnCount);

            expect(columnCount).to.be.greaterThan(0);

        })
       

    })
    it.only('Read all the content of the web table ', ()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows) => {
        
            cy.wrap($row).within(()=>{

                cy.get('td').each(($col, index, $cols) =>{

                    cy.log($col.text());
                })
            })
        
        })

    })
})

//Work on Sales> Order Page 