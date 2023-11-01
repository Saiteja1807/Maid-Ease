pipeline {
    agent any

    environment {
        NODEJS_VERSION = '14'  // Specify your desired Node.js version
        WORKSPACE_PATH = "${WORKSPACE}/node-app"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir(WORKSPACE_PATH) {
                    script {
                        sh "nvm install ${NODEJS_VERSION}"
                        sh "nvm use ${NODEJS_VERSION}"
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                dir(WORKSPACE_PATH) {
                    script {
                        sh 'npm run build'  // Customize this based on your project setup
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                dir(WORKSPACE_PATH) {
                    script {
                        sh 'npm start'  // Start your Node.js application
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}
