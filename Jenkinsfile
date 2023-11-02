pipeline {
    agent any

    environment {
        AWS_REGION = 'your_aws_region'
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
                dir('/CS692/website') {
                    // sh 'npm install'
                    // sh 'npm run build'

                    def appDirectory = '/maidease'

                    // Copy the built files to the application directory
                    sh "cp -r ./build/* ${appDirectory}"

                    // Optionally, restart your application here, for example:
                    // sh "cd ${appDirectory} && pm2 restart your_app_name"
                }
            }
        }
    }
}
