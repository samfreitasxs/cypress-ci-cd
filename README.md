# Teste de API usando Cypress

Este projeto consiste em testes automatizados de API utilizando o framework Cypress. Ele inclui testes para as seguintes APIs:

- http://fakerestapi.azurewebsites.net/api/v1/Activities
- http://fakerestapi.azurewebsites.net/api/v1/Books
- http://fakerestapi.azurewebsites.net/api/v1/CoverPhotos
- http://fakerestapi.azurewebsites.net/api/v1/Users

## Requisitos

- Node.js (versão 14 ou superior)
- Cypress (instalado globalmente ou localmente no projeto)

## Instalação

1. Faça o clone deste repositório para o seu ambiente local.

2. Navegue até o diretório do projeto.

3. Execute o comando a seguir para instalar as dependências do projeto:

npm install

## Configuração

1. No arquivo `cypress.json`, você pode definir as configurações do Cypress, como a URL base das APIs e outras configurações relevantes.

2. Verifique as configurações em `cypress/support/index.js` para ajustar o comportamento global dos testes, como autenticação, interceptação de requisições, etc.

## Executando os testes

- Para executar todos os testes, use o seguinte comando:

npm run test:cypress

npm run test:cypress -- --spec "cypress/integration/spec3.cy.js"


## Estrutura do projeto

A estrutura do projeto é organizada da seguinte forma:

- `cypress/e2e`: Contém os arquivos de teste em formato `.spec.cy.js`.

- `cypress/support`: Contém os arquivos de suporte para os testes, como comandos personalizados e configurações globais.

- `cypress/fixtures`: Contém os arquivos de dados usados nos testes, como dados de entrada e respostas de API mockadas.

- `cypress/screenshots` e `cypress/videos`: Diretórios para armazenar capturas de tela e vídeos dos testes, respectivamente.

## Contribuição

Sinta-se à vontade para contribuir com melhorias neste projeto. Caso tenha sugestões, abra uma nova issue detalhando suas ideias ou envie um pull request com as modificações propostas.

