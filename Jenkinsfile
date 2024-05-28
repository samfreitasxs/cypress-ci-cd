pipeline {
    agent any

    stages {
        stage('Inicial') {
            steps {
                echo 'Iniciando a pipeline'
            }
        }
        stage('Checkout do codigo') {
            steps {
                checkout scm
            }
        }
        stage('Configurar o Node.js') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS 20.11.1') {
                    bat 'node -v'
                    bat 'npm -v'
                }
            }
        }
        stage('Instalar as dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar os testes') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
    post {
        success {
            slackSend (
                channel: '#build-notifications',
                color: 'good',
                message: "Build Successful: ${env.JOB_NAME} [${env.BUILD_NUMBER}] (<${env.BUILD_URL}|Open>)"
            )
        }
        failure {
            slackSend (
                channel: '#build-notifications',
                color: 'danger',
                message: "Build Failed: ${env.JOB_NAME} [${env.BUILD_NUMBER}] (<${env.BUILD_URL}|Open>)"
            )
        }
    }
}