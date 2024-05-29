describe('MunicipioController API Tests', () => {
  it('should fetch the list of municipios', () => {
    cy.request({
      method: 'GET',
      url: '/municipios' // Ajuste a URL conforme necessário
    }).then((response) => {
      expect(response.status).to.eq(200); // Verifica se a resposta tem status 200
      expect(response.body).to.be.an('array'); // Verifica se o corpo da resposta é um array
      expect(response.body.length).to.be.greaterThan(0); // Verifica se o array não está vazio
    });
  });

  it('should return a municipio with specific properties', () => {
    cy.request({
      method: 'GET',
      url: '/municipios' // Ajuste a URL conforme necessário
    }).then((response) => {
      expect(response.status).to.eq(200);
      const municipio = response.body[0]; // Verifica o primeiro município na lista
      expect(municipio).to.have.property('id');
      expect(municipio).to.have.property('nome');
      // Adicione mais propriedades conforme necessário
    });
  });

  it('should handle 404 for invalid endpoint', () => {
    cy.request({
      method: 'GET',
      url: '/municipios/invalid-endpoint',
      failOnStatusCode: false, // Evita falha automática em status codes diferentes de 2xx
    }).then((response) => {
      expect(response.status).to.eq(404); // Verifica se a resposta tem status 404
    });
  });
});
