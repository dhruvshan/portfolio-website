describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/') // change URL to match your dev URL
      cy.get("h3") // 8.
      .should("contain", "Dhruv Shanbhag");
      cy.get('.vertical-timeline-element--work').should('have.length', 5)
    //   cy.contains('LinkedIn').click()
    //   cy.contains('LinkedIn')
    })
  })