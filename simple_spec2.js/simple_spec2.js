describe('Taller 6', function() {
    it('Generando paleta de colores', function() {
      cy.visit('https://darman89.github.io/taller-6/')
      cy.contains('Generar nueva paleta').click()
      cy.screenshot();		  
    })
})
