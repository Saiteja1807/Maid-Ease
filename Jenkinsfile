pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-2a'
        AWS_ACCESS_KEY_ID = credentials('maidease_access_key')
        AWS_SECRET_ACCESS_KEY = credentials('maidease_secret_access_key')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Deploy') {
            steps {
                sh 'npm install'
                sh 'npm run build'

                // Replace this with the actual path to your application directory
                def appDirectory = '/maidease'

                // Copy the built files to the application directory
                sh "cp -r ./build/* ${appDirectory}"

                // Optionally, restart your application here, for example:
                // sh "cd ${appDirectory} && pm2 restart your_app_name"
            }
        }
    }
}
