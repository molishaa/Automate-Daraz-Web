///      <reference types="cypress" />

describe('Visit Daraz website', () => {

  // beforeEach(() => {
  //   cy.visit('https://www.daraz.com.np/')
 
  // })
    it('Visiting URL ',function (){

    
      cy.visit('https://www.daraz.com.np/')
cy.title().should('eq','Online Shopping in Nepal | Best Deals, Prices & Discounts - Daraz.com.np')

    })

//     it('Click on Signup In navabar', () =>{
//       cy.get('#anonSignup > .grey').click() //clicking on Signup in navbar
// cy.get('.mod-login-input-phone>input').type('9868890686')
// cy.get('.mod-login-input-name>input').type('Molisha Test')
// cy.get('.mod-login-input-password >input').type('Test@123')
// cy.get('.next-btn-primary').click()  //clicking on SignUp button
//     })

    it('Click on Login In navabar', () =>{
      cy.get('#anonLogin > .grey').click() //clicking on login

    })



    it('Add Username', () => {
        //cy.get('.mod-input floating mod-login-input-loginName mod-input-loginName').clear().type('molisha123@mailinator.com')
        cy.get('.mod-login-input-loginName > input').clear().type('molisha123@mailinator.com')
        cy.get('.mod-input-password > input').type('Test@123')
    })
    

it('Click on Login', () =>{
cy.get('.next-btn').click()
cy.visit('https://www.daraz.com.np/#')

})

it('Search the item', ()=> {
  cy.get('.search-box__input--O34g').type('Mobile')
cy.get('.search-box__button--1oH7').click()


})

it('Apply multiple filter and add item to the cart', () => {
  //checkbox
   cy.get('input[value=.ant-checkbox-input]').first().click()
   cy.get('input[value=.ant-checkbox-input]').first().should('be.checked')
cy.get(':nth-child(2) > .c2uiAC > :nth-child(1) > .c1WzWT > :nth-child(1) > .ant-checkbox > .ant-checkbox-input').click()


});


      
})