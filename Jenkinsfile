pipeline {
    agent any

    environment {
        SSH_CREDENTIALS = 'calip'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', credentialsId: 'calip', url: 'https://github.com/Kamilq99/KalkulatorIP.git'
            }
        }
        stage('Build') {
            steps {
                sh 'cd KalkulatorIP && npm install && npm run build'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sshagent(credentials: ['SSH_CREDENTIALS']) {
                        sh "scp -r KalkulatorIP/* user&server_ip:/path/to/deploy"
                    }
                }
            }
        }
        stage('Restart Server') {
            steps {
                script {
                    sshagent(credentials: ['SSH_CREDENTIALS']) {
                        sh "ssh user&server_ip 'sudo systemctl restart your-nodejs-service'"
                    }
                }
            }
        }
        stage('Expose Application') {
            steps {
                script {
                    sshagent(credentials: ['SSH_CREDENTIALS']) {
                        sh "ssh user&server_ip 'sudo iptables -A INPUT -p tcp --dport 3000 -j ACCEPT'"
                    }
                }
            }
        }
    }
}
