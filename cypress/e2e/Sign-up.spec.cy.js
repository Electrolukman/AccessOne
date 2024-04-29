describe('test signup', () => {

  beforeEach(()=>{
    cy.visit('/')
  })

  it('successful signup', () => {
    cy.log('Successful signup')
  })
  it('failed signup due to existing email', () => {
    cy.get('[href="/commands/querying"]').eq(2).click()
    cy.log('Email exits')
  })
  it('failed signup due to existing phone number', () => {
    cy.get('[href="/commands/actions"]').eq(2).click()
    cy.log('Number exists')
  })
})