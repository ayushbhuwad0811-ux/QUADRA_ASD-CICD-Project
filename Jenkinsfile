
pipeline {
    agent any

    environment {
        DOCKER = 'C:\\Users\\ayush\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe'
        IMAGE = 'quadra-web:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Docker') {
            steps {
                bat '"%DOCKER%" --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat '"%DOCKER%" build -t "%IMAGE%" .'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Code checked out and Docker image built successfully!'
        }

        failure {
            echo 'FAILED: Check Console Output for the error.'
        }
    }
}
