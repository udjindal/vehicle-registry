pipeline {
    agent any
    stages {
        stage('Build image') {
            /* This builds the actual image; synonymous to
            * docker build on the command line */
              docker.build("udjindal/vehicle-registry")
            }


        stage('Push to DockerHub'){
            steps {
                sh '''
                sudo apt install -y gnupg2 pass
                docker-compose push
                '''
            }
        }

        stage('RunDeck Deploy'){
            steps {
                build 'Rundeck-Integration'
            }
        }
    }
}
