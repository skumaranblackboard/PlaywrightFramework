pipeline {
    agent any

    triggers {
        cron('H 22 * * *')
        pollSCM('H/2 * * * *')
    }

    environment {
        CI              = 'true'
        PATH            = "/opt/homebrew/bin:${env.PATH}"
        // Self-hosted Moodle from docker-compose.yml (ephemeral, so creds are not secret).
        BASE_URL        = 'http://localhost:8080'
        MOODLE_USERNAME = 'admin'
        MOODLE_PASSWORD = 'Admin#12345'
        MOODLE_SERVICE  = 'automation'
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

        stage('Start Moodle') {
            steps {
                sh 'docker compose up -d'
                sh 'npm run moodle:wait'
                sh 'npm run moodle:provision'
            }
        }

        stage('Playwright Automation') {
            steps {
                sh 'npm run test:ci'
                script {
                    if (currentBuild.getBuildCauses('hudson.triggers.TimerTrigger$TimerTriggerCause')) {
                        sh 'npm run test:regression'
                    }
                }
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
                    archiveArtifacts artifacts: 'playwright-report/**,allure-report/**', allowEmptyArchive: true
                }
            }
        }

    }

    post {
        always {
            sh 'docker compose down -v || true'
        }
        success {
            echo "All tests passed!"
        }
        failure {
            echo "Tests failed. Check the Playwright and Allure reports."
        }
    }
}
