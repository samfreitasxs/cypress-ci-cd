pipeline {
    agent any

    stages {
        stage('Inicial') {
            steps {
                echo 'Iniciando a pipeline'
            }
        }
        stage('Checkout do código') {
            steps {
                // Clonar o repositório do Git
                checkout scm
            }
        }
        stage('Configurar o Node.js') {
            steps {
                // Configurar Node.js
                nodejs(nodeJSInstallationName: 'NodeJS 20') {
                    bat 'node -v'
                    bat 'npm -v'
                }
            }
        }
        stage('Instalar as dependências') {
            steps {
                // Instalar dependências do projeto
                bat 'npm install'
            }
        }
        stage('Executar os testes') {
            steps {
                // Executar testes do Cypress
                bat 'npx cypress run'
            }
        }
    }
}
