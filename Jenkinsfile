pipeline {
    agent any 
    stages {
        stage('Static Analysis') {
            steps {
                echo 'Run the static analysis to the code' 
            }
        }
        stage('Compile') {
            steps {
                echo 'Compile the source code' 
            }
        }
        stage('Security Check') {
            steps {
                echo 'Run the security check against the application' 
            }
        }
        stage('Run Unit Tests') {
            steps {
                echo 'Run unit tests from the source code' 
            }
        }
        stage('Run Integration Tests') {
            steps {
                echo 'Run only crucial integration tests from the source code' 
            }
        }
       stage('build') {
            steps {
                 dir('/CS692/website'){
                script{
                sh 'npm install'
                sh 'npm run build'
            }
        }
                echo 'move the artifact to specific folder' 
            }
        }
         stage('Deploy') {
            steps {
                script {
                    def appDirectory = '/maidease'

                    // Copy the built files to the application directory
                    sh "cp -r ./build/* ${appDirectory}"

                    // Optionally, restart your application here, for example:
                    // sh "cd ${appDirectory} && pm2 restart your_app_name"
                 echo 'run the application on the specified path'
                }
        }
}
       stage('Notify Slack') {
            steps {
                slackSend(channel: '#team1', color: 'good', message: 'Jenkins build successful!')
            }
    }
    }
    post {
        success {
            emailext(
                subject: "Jenkins Pipeline Success",
                body: "Your Jenkins pipeline has completed successfully.",
                to: "sm54187n@pace.edu,rm47512n@pace.edu,sa18871n@pace.edu,an13378n@pace.edu,bp99662n@pace.edu,jh51845n@pace.edu,ts51519n@pace.edu,nb53033n@pace.edu"
            )
        }
        failure {
            emailext(
                subject: "Jenkins Pipeline Failure",
                body: "Your Jenkins pipeline has failed. Please check the logs for details.",
                to: "sm54187n@pace.edu,rm47512n@pace.edu,sa18871n@pace.edu,an13378n@pace.edu,bp99662n@pace.edu,jh51845n@pace.edu,ts51519n@pace.edu,nb53033n@pace.edu"
            )
        }
    }
   
}
