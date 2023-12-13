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
                sh git clone https://github.com/Saiteja1807/Maid-Ease.git /home/codebase/dev/maidease
                echo 'moved the artifact to specific folder' 
                sh 'cd /home/codebase/dev/maidease/Maid-Ease/CS692/website'
                sh 'npm install'
            }
        }
                
            
        
         stage('Deploy') {
            steps {
                script {
                   sh 'cd cd /home/codebase/dev/maidease/Maid-Ease/CS692/website/client'
                   sh 'npm start'
                }
        }
}
    }
    post {
        success {
            emailext(
                subject: "Jenkins Pipeline Success",
                body: "Your Jenkins pipeline has completed successfully.",
                to: "sm54187n@pace.edu"
            )
        }
        failure {
            emailext(
                subject: "Jenkins Pipeline Failure",
                body: "Your Jenkins pipeline has failed. Please check the logs for details.",
                to: "sm54187n@pace.edu"
            )
        }
    }
   
}
