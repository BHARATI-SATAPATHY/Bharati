
describe('Read Write File Demo', function()
{
    beforeEach(function()
    {
        cy.fixture('example.json').as('data')
    })



it('read file using fixtures', function(){

    cy.fixture('example.json')
             .its('name').should('eq', 'cypress')
             cy.log(this.data.name)
             cy.log(this.data.email)
})


 it('read file using readfile command', function(){

  cy.readFile('./cypress/fixtures/example.json')
  .its('name').should('eq', 'cypress')

    
})

it('Write File Demo', function()
{
    cy.writeFile('sample.txt', 'Hello i am leaning cypress')
    cy.writeFile('sample.txt', '\nThis is interesting', {flag: 'a+'})
})

})