describe('Restful Booker API Tests', () => {
    const apiUrl = 'https://restful-booker.herokuapp.com';

    let bookingBody;

  //   let bookingBody = 
  //   {
  //     "firstname": "Lemuel",
  //     "lastname": "Fay",
  //     "totalprice": 111,
  //     "depositpaid": true,
  //     "bookingdates": {
  //         "checkin": "2018-01-01",
  //         "checkout": "2019-01-01"
  //     },
  //     "additionalneeds": "Breakfast"
  // }

   

    /*
    Way to pass Body in POST/PUT/PATCH requests:
    1. Using variable creation
    2. Directly in the request body
    3. Using fixtures (recommended for larger payloads)
    4. Using JSON files (recommended for larger payloads)
    */

    let token;
    let bookingId;

    it('API Calls', () => {
    
      cy.request({

        method: 'GET',
        url: `${apiUrl}/ping`, 
        headers: { 'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cache-Control': 'no-cache',
          'User-Agent': 'Cypress Test Agent',
          'Authorization': 'Bearer test-token'
        }
      }).then((response) => {
        cy.log(`Response: ${JSON.stringify(response.body)}`); // Log the response body
        expect(response.status).to.eq(201);
        expect(response.body).to.include('Created');
        expect(response.duration).to.be.lessThan(2000);
        expect(response.headers).to.have.property('content-type', 'text/plain; charset=utf-8');
      
      })
    
    
    })
  
    it('should create a new booking (JSON)', () => {
      cy.fixture('api_data/bookingData.json').then((bookingData) => {
        // Optional modifications:
          bookingData.firstname = "Updatedfirstname";
          bookingData.lastname = "Updatedlastname";
        cy.log(`Booking Body: ${JSON.stringify(bookingData)}`);
    
        cy.request({
          method: 'POST',
          url: `${apiUrl}/booking`,
          headers: { 'Content-Type': 'application/json' },
          body: bookingData
        }).its('body').then((body) => {
          expect(body).to.have.property('bookingid');
          expect(body).to.have.property('booking');
          bookingId = body.bookingid;
          cy.log(`Booking ID: ${bookingId}`);
        });
      });
    });
  
    it('should retrieve the booking by ID', () => {
      cy.request(`${apiUrl}/booking/${bookingId}`)
        .its('body')
        .should('include', { firstname: 'Updatedfirsname', lastname: 'Updatedlastname' });
    });
  
    it('should create an auth token', () => {
      cy.request('POST', `${apiUrl}/auth`, {
        username: 'admin',
        password: 'password123'
      }).its('body').should('have.property', 'token')
        .then((t) => { token = t; });
    });
  
    it('should update booking (PUT)', () => {
      cy.request({
        method: 'PUT',
        url: `${apiUrl}/booking/${bookingId}`,
        headers: { Cookie: `token=${token}` },
        body: {
          firstname: 'Jane',
          lastname: 'Smith',
          totalprice: 200,
          depositpaid: false,
          bookingdates: { checkin: '2025-08-02', checkout: '2025-08-06' },
          additionalneeds: 'Lunch'
        }
      }).its('status').should('eq', 200);
  
      cy.request(`${apiUrl}/booking/${bookingId}`)
        .its('body')
        .should('include', { firstname: 'Jane', lastname: 'Smith' });
    });
  
    it('should partially update booking (PATCH)', () => {
      cy.request({
        method: 'PATCH',
        url: `${apiUrl}/booking/${bookingId}`,
        headers: { Cookie: `token=${token}` },
        body: { additionalneeds: 'Dinner' }
      }).its('status').should('eq', 200);
  
      cy.request(`${apiUrl}/booking/${bookingId}`)
        .its('body')
        .should('include', { additionalneeds: 'Dinner' });
    });
  
    it('should delete the booking', () => {
      cy.request({
        method: 'DELETE',
        url: `${apiUrl}/booking/${bookingId}`,
        headers: { Cookie: `token=${token}` }
      }).its('status').should('eq', 201);
  
      cy.request({
        method: 'GET',
        url: `${apiUrl}/booking/${bookingId}`,
        failOnStatusCode: false
      }).its('status').should('eq', 404);
    });
  
    it('should handle GET /booking invalid ID gracefully', () => {
      cy.request({
        method: 'GET',
        url: `${apiUrl}/booking/999999`,
        failOnStatusCode: false
      }).its('status').should('eq', 404);
    });
  });
  