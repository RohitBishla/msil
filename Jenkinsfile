pipeline {
  agent any
  stages {
    stage('Checkout-Code') {
      steps {
        git(url: 'https://github.com/RohitBishla/msil', branch: 'main')
      }
    }

    stage('List') {
      steps {
        sh 'ls -la'
      }
    }

  }
}