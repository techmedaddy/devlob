pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'gradle build'
            }
        }

        stage('Test') {
            steps {
                sh 'gradle test'
            }
        }

        stage('Lint') {
            steps {
                sh 'gradle lint'
            }
        }

        stage('Deploy') {
            steps {
                sh 'gradle start'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/build/libs/*.jar', allowEmptyArchive: true
            junit 'build/test-results/**/*.xml'
        }
    }
}