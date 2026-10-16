
pipeline {
    agent any

    environment {
        DOCKER = 'C:\\Users\\ayush\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe'
        IMAGE = 'quadra-web:latest'
        CONTAINER = 'quadra-ci'
        HOST_PORT = '8083'
        CONTAINER_PORT = '80'
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
                bat '"%DOCKER%" info'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat '"%DOCKER%" build -t "%IMAGE%" .'
            }
        }

        stage('Stop and Remove Old Container') {
            steps {
                bat '''
                "%DOCKER%" rm -f "%CONTAINER%" 2>NUL
                exit /b 0
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                bat '''
                "%DOCKER%" run -d --restart unless-stopped --name "%CONTAINER%" -p %HOST_PORT%:%CONTAINER_PORT% "%IMAGE%"
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                bat '"%DOCKER%" ps --filter "name=%CONTAINER%"'
                echo 'Website URL: http://localhost:8083'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Website built and deployed!'
            echo 'Open http://localhost:8083'
        }

        failure {
            echo 'FAILED: Check the Console Output for the error.'
        }
    }
}
