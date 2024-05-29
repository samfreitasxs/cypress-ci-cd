describe('Testes das APIs FakeRestAPI v1', () => {
    let activities = []
    let books = []
    let coverPhotos = []
    let users = []
  
    before(() => {
      cy.request('GET', 'http://fakerestapi.azurewebsites.net/api/v1/Activities')
        .then((response) => {
          expect(response.status).to.eq(200)
          activities = response.body
        })
  
      cy.request('GET', 'http://fakerestapi.azurewebsites.net/api/v1/Books')
        .then((response) => {
          expect(response.status).to.eq(200)
          books = response.body
        })
  
      cy.request('GET', 'http://fakerestapi.azurewebsites.net/api/v1/CoverPhotos')
        .then((response) => {
          expect(response.status).to.eq(200)
          coverPhotos = response.body
        })
  
      cy.request('GET', 'http://fakerestapi.azurewebsites.net/api/v1/Users')
        .then((response) => {
          expect(response.status).to.eq(200)
          users = response.body
        })
    })
  
    it('Deve obter a lista de atividades', () => {
      expect(activities).to.be.an('array')
      expect(activities.length).to.be.greaterThan(0)
    })
  
    it('Deve obter a lista de livros', () => {
      expect(books).to.be.an('array')
      expect(books.length).to.be.greaterThan(0)
    })
  
    it('Deve obter a lista de capas de livros', () => {
      expect(coverPhotos).to.be.an('array')
      expect(coverPhotos.length).to.be.greaterThan(0)
    })
  
    it('Deve obter a lista de usuários', () => {
      expect(users).to.be.an('array')
      expect(users.length).to.be.greaterThan(0)
    })
  
    it('Deve obter os detalhes de uma atividade específica', () => {
      if (activities.length > 0) {
        const activityId = activities[0].id
  
        cy.request(`GET`, `http://fakerestapi.azurewebsites.net/api/v1/Activities/${activityId}`)
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', activityId)
          })
      }
    })
  
    it('Deve obter os detalhes de um livro específico', () => {
      if (books.length > 0) {
        const bookId = books[0].id
  
        cy.request(`GET`, `http://fakerestapi.azurewebsites.net/api/v1/Books/${bookId}`)
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', bookId)
          })
      }
    })
  
    it('Deve obter os detalhes de uma capa de livro específica', () => {
      if (coverPhotos.length > 0) {
        const coverPhotoId = coverPhotos[0].id
  
        cy.request(`GET`, `http://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/${coverPhotoId}`)
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', coverPhotoId)
          })
      }
    })
  
    it('Deve obter os detalhes de um usuário específico', () => {
      if (users.length > 0) {
        const userId = users[0].id
  
        cy.request(`GET`, `http://fakerestapi.azurewebsites.net/api/v1/Users/${userId}`)
          .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id', userId)
          })
      }
    })
  })
  