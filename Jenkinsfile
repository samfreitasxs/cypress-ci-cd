pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        SLACK_CHANNEL = '#notification-pipeline'
        SLACK_CREDENTIALS_ID = '1WXUniewZxfTvE1vcg3cMuq8'  // Certifique-se de que esta ID está correta
        NPM_CONFIG_PREFIX = 'C:\\Program Files\\nodejs\\npm'  // Caminho alternativo para a configuração do npm
    }

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
                nodejs(nodeJSInstallationName: 'NodeJS 20') {
                    bat 'node -v'
                    bat 'npm -v'
                }
            }
        }
        stage('Instalar as dependencias') {
            steps {
                bat 'npm install'
                bat 'npm install cypress'
            }
        }
        stage('Executar os testes') {
            steps {
                bat 'npx cypress run'
            }
        }
    }

    post {
        always {
            script {
                def currentResult = currentBuild.currentResult
                def slackColor = (currentResult == 'SUCCESS') ? 'good' : (currentResult == 'UNSTABLE') ? 'warning' : 'danger'
                def attachments = [
                  [
                    text: "Build ${currentResult}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'\nMore info at: ${env.BUILD_URL}",
                    fallback: 'Build notification',
                    color: slackColor
                  ]
                ]
                slackSend(channel: env.SLACK_CHANNEL, attachments: attachments, tokenCredentialId: env.SLACK_CREDENTIALS_ID)
            }
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        unstable {
            echo 'Pipeline is unstable!'
        }
    }
}
