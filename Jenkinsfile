pipeline {
    agent none  // No global agent is allocated
    stages {
        stage('Checkout') {
            agent { label 'checkout' }  // Allocate a node (e.g., a specific label or default agent)
            steps {
                git credentialsId: 'github-pat',
                    url: 'https://github.com/agdias-cloud/auth.git'
            }
        }
        stage('Run buildah') {
            agent {
                kubernetes {
                    
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
