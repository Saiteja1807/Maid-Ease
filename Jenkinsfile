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
        stage('Publish Artifacts') {
            steps {
                echo 'Save the assemblies generated from the compilation' 
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
