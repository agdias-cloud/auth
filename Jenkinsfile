pipeline {
    agent {
      kubernetes {
        yaml '''
          apiVersion: v1
          kind: Pod
          
          spec:
            containers:
            - image: buildah/buildah
              name: buildah
              command: 
              - cat
              tty: true

        '''
             
                     
        }
      }  
    stages {
        stage('Checkout') {
         
            steps {
                git credentialsId: 'github-pat',
                    url: 'https://github.com/agdias-cloud/auth.git'
            }
        }
        stage('Run buildah') {

            steps {
                container('buildah') {
                    sh 'buildah login --help'
                }
            }
        }
    }
}
