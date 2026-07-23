pipeline {
    agent any

    triggers {
        cron('H 22 * * *')
        pollSCM('H/2 * * * *')
    }

    environment {
        CI              = 'true'
        PATH            = "/opt/homebrew/bin:${env.PATH}"
        BASE_URL        = 'https://sandbox.moodledemo.net'
        // Single "Username with password" credential; Jenkins exposes _USR and _PSW.
        MOODLE          = credentials('moodle-admin')
        MOODLE_USERNAME = "${MOODLE_USR}"
        MOODLE_PASSWORD = "${MOODLE_PSW}"
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
        success {
            echo "All tests passed!"
        }
        failure {
            echo "Tests failed. Check the Playwright and Allure reports."
        }
    }
}
