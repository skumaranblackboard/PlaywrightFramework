pipeline {
    agent any

    triggers {
        cron('H 22 * * *')
    }

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

        stage('Critical Tests') {
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

        stage('Oven Stability Check') {
            steps {
                sh 'npm run test:oven'
            }
            post {
                always {
                    publishHTML(target: [
                        allowMissing         : true,
                        alwaysLinkToLastBuild: true,
                        keepAll              : true,
                        reportDir            : 'playwright-report',
                        reportFiles          : 'index.html',
                        reportName           : 'Oven Stability Report'
                    ])
                }
            }
        }

        stage('Non-Critical Tests') {
            when {
                triggeredBy 'TimerTrigger'
            }
            steps {
                sh 'npm run test:regression'
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
                        reportName           : 'Playwright Report (Nightly)'
                    ])
                    publishHTML(target: [
                        allowMissing         : true,
                        alwaysLinkToLastBuild: true,
                        keepAll              : true,
                        reportDir            : 'allure-report',
                        reportFiles          : 'index.html',
                        reportName           : 'Allure Report (Nightly)'
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
            archiveArtifacts artifacts: 'playwright-report/**,allure-report/**', allowEmptyArchive: true
        }
    }
}
