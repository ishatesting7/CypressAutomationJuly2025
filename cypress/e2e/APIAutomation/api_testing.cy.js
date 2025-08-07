describe('Restful Booker API Tests', () => {
    const apiUrl = 'https://restful-booker.herokuapp.com';
  
    let token;
    let bookingId;
  
    it('should create a new booking (JSON)', () => {
      cy.request({
        method: 'POST',
        url: `${apiUrl}/booking`,
        headers: { 'Content-Type': 'application/json' },
        body: {
          firstname: 'John',
          lastname: 'Doe',
          totalprice: 123,
          depositpaid: true,
          bookingdates: { checkin: '2025-08-01', checkout: '2025-08-05' },
          additionalneeds: 'Breakfast'
        }
      }).its('body').then((body) => {
        expect(body).to.have.property('bookingid');
        expect(body).to.have.property('booking');
        bookingId = body.bookingid;
      });
    });
  
    it('should retrieve the booking by ID', () => {
      cy.request(`${apiUrl}/booking/${bookingId}`)
        .its('body')
        .should('include', { firstname: 'John', lastname: 'Doe' });
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
  