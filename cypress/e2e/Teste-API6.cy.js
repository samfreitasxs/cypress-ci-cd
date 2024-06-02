describe('Testes de API com JSONPlaceholder', () => {
    context('DELETE', () => {
      it('Deve testar o verbo DELETE', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
          .then((response) => {
            expect(response.status).to.eq(200); // Verifica o código de status esperado
            // Adicione outras asserções conforme necessário
          });
      });
    });
  
    context('POST', () => {
      it('Deve testar o verbo POST', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        }).then((response) => {
            expect(response.status).to.eq(201); // Verifica o código de status esperado
            // Adicione outras asserções conforme necessário
        });
      });
    });
  
    context('GET', () => {
      it('Deve testar o verbo GET', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
          .then((response) => {
            expect(response.status).to.eq(200); // Verifica o código de status esperado
            // Adicione outras asserções conforme necessário
          });
      });
    });
  
    context('PUT', () => {
      it('Deve testar o verbo PUT', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        }).then((response) => {
            expect(response.status).to.eq(200); // Verifica o código de status esperado
            // Adicione outras asserções conforme necessário
        });
      });
    });
  });
  