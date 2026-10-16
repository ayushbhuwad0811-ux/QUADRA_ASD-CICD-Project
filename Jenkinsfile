
pipeline {
    agent any

    environment {
        DOCKER = 'C:\\Users\\ayush\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe'
        IMAGE = 'quadra-web:latest'
        CONTAINER = 'quadra-ci'
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

        stage('Deploy Container') {
            steps {
                bat '''
                "%DOCKER%" rm -f "%CONTAINER%" 2>NUL
                "%DOCKER%" run -d --name "%CONTAINER%" -p 8083:80 "%IMAGE%"
                '''
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Website deployed on http://localhost:8083'
        }
        failure {
            echo 'FAILED: Check Console Output.'
        }
    }
}
