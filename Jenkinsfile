pipeline {
    agent any

    environment {
        CI   = 'true'
        PATH = "/opt/homebrew/bin:${env.PATH}"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install chromium --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test:ci'
            }
            post {
                always {
                    sh 'npm run report:allure || true'
                    publishHTML(target: [
                        allowMissing         : true,
                        alwaysLinkToLastBuild: true,
                        keepAll              : true,
                        reportDir            : 'playwright-report',
                        reportFiles          : 'index.html',
                        reportName           : 'Playwright Report'
                    ])
                    publishHTML(target: [
                        allowMissing         : true,
                        alwaysLinkToLastBuild: true,
                        keepAll              : true,
                        reportDir            : 'allure-report',
                        reportFiles          : 'index.html',
                        reportName           : 'Allure Report'
                    ])
                }
            }
        }

    }

    post {
        success {
            echo "All tests passed!"
        }
        failure {
            echo "Tests failed. Check the Playwright and Allure reports."
        }
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
