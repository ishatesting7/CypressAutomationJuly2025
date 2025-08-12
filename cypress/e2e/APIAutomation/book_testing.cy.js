
describe('API Validation Tests', () => {

    const baseURL = 'https://simple-books-api.glitch.me';
    let token;
    
    it('API Health Check', ()=>{

        cy.request({
            method: 'GET',
            url: `${baseURL}/ping`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            cy.log(`Response: ${JSON.stringify(response.body)}`); // Log the response body
            expect(response.status).to.eq(200);
            expect(response.body).to.include('healthy');
        });
    })


    it('should create a new client', () => {
        cy.request({
          method: 'POST',
          url: 'https://simple-books-api.glitch.me/api-clients/',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            clientName: 'HakanDemo',
            clientEmail: 'aog42v35dwdemodemof@gmail.com',
          },
        }).then((response) => {
          // Assertions
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('accessToken');
          cy.log('Access Token:', response.body.accessToken);
        });
      });


    it('Generate Access Token', () => {

        function generateEmailAddress()
        {
            const timestamp = new Date().getTime();
            const emailAddress = timestamp + '@example.com';
            return emailAddress;
        }
        cy.request({
            method: 'POST',
            url: `${baseURL}/api-clients/`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:
            {
                "clientName": "Cypress Test Client",
                "clientEmail": generateEmailAddress()
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
            
        }).then((response) => {
            cy.log(`Response: ${JSON.stringify(response.body)}`); // Log the response body
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('accessToken');
            token = response.body.accessToken;
            cy.log(`Access Token: ${token}`);
        })

    })
    it('Create Order for Book', ()=>{

        function generateFullName() {
            const firstNames = ['John', 'Jane', 'Alice', 'Bob'];
            const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown'];
            const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            return `${randomFirstName} ${randomLastName}`;
        }
        cy.request({

            method: 'POST',
            url: `${baseURL}/orders`,
            body:
            {
                "bookId": 1,
                "customerName": generateFullName()
            },
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`,
            }

        }).then((response) => {
            cy.log(`Response: ${JSON.stringify(response.body)}`); // Log the response body
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('bookId', 1);
            expect(response.body).to.have.property('customerName');
        })
    })


})