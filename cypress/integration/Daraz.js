require('cypress-xpath')
describe('daraz website', () => {
  it('visit daraz website', () => {
      cy.visit('https://www.daraz.com.np')
  });

  it('login using credentials', () => {
      cy.contains('login').click()
    });
     
it('Input email and Password', () => {
cy.get('.mod-input.mod-login-input-loginName.mod-input-loginName').type('molisha123@mailinator.com')
cy.get('.mod-input.mod-input-password.mod-login-input-password.mod-input-password').type('Test@123')
 cy.get('next-btn next-btn-primary next-btn-large').click()    //login
});
it('Search', () => {
cy.get('.search-box__input--O34g').type('Mobile')

 });
//  it('Apply multiple filter and add item to the cart', () => {


});


