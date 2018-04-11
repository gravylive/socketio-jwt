pipeline {
  agent any
  tools {
    nodejs 'default'
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm i && npm test'
      }
    }
    stage('Publish') {
      steps {
        withCredentials([usernameColonPassword(credentialsId: 'artifactory', variable: 'USERPASS')]) {
          sh "curl -u $USERPASS 'https://gravylive.jfrog.io/gravylive/api/npm/npm/auth/gravy' -o .npmrc"
        }
        sh 'npm publish'
      }
    }
  }
}

