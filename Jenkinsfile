pipeline {
    agent none
    stages {
        stage('Checkout') {
          steps {
            git credentialsId: 'github-pat',
            url: 'https://github.com/agdias-cloud/auth.git'
          }
        }
        stage('Run buildah') {
          agent {
            kubernetes {
              label 'buildah-agent'
              yamlFile 'agents/buildah.yaml'
            }
          }
            steps {
                container('buildah') {
                    sh 'buildah login --help'
                }
            }
        }
    }
    
}