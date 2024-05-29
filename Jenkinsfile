pipeline {
    agent any
     tools { 
        nodejs "NodeJS 20" 
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/samfreitasxs/cypress-ci-cd.git']]])
            }
        }
        
        stage('Build') {
            steps {
                bat "node -v"
                bat 'npm install'
                bat 'npm run build'
            }
        }
        
        stage('Run Unit Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}