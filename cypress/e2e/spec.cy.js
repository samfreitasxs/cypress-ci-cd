// cypress/integration/example_spec.js

describe('Página Inicial', () => {
    it('deve carregar a página inicial corretamente', () => {
      // Visita a página inicial
      cy.visit('http://seusite.com')
  
      // Verifica se o título da página é o esperado
      cy.title().should('include', 'Título Esperado')
  
      // Verifica se a página contém o texto específico
      cy.contains('Texto que deve estar na página inicial')
    })
  })
  