describe('매인 spec', () => {
  it('회사 관리 화면으로 이동', () => {
    cy.visit('http://localhost:38002/')
    cy.wait(1000);
    cy.contains('회사 관리').click()
    cy.wait(1000);
    cy.url().should('include', '/company/list')
  })
})