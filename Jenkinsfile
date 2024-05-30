def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

pipeline {
    agent any

    environment {
        BUILD_USER = ''
    }
    stages {
        stage('Inicial') {
            steps {
                echo 'Iniciando a pipeline'
            }
        }
        stage('Checkout do codigo') {
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
        stage('Instalar as dependencias') {
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
    post {
        always {
            //The script step takes a block of Scripted Pipeline and executes that in the Declarative Pipeline. 
            //For most use-cases, the script step should be unnecessary in Declarative Pipelines, but it can provide
            //a useful "escape hatch." script blocks of non-trivial size and/or complexity should be moved into Shared Libraries instead.
            script {
                BUILD_USER = getBuildUser()
             }
            slackSend channel: '#notification-pipeline',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}"
        }
    }
}