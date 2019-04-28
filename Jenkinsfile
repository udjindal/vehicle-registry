pipeline {
    agent any
    stages {
        stage('Build image') {
            /* This builds the actual image; synonymous to
            * docker build on the command line */
            steps {
                sh '''
                    #!/usr/bin/env bash
                    # Names to identify images and containers of this app
                    # TAG=$BUILD_NUMBER
                    TAG=latest
                    echo "The base image has been rebuilt. Deleting all other containers and images ahead of rebuild"
                    #docker rm -f $(docker ps -a -q) || true
                    # For now, deleting all images other than the the one with id=IMAGE_ID. If this turns out to be over-raeaching it can be susbtitutued with the below
                    # docker rmi $(docker images | grep -Ei $TAG | grep -Eiv latest
                    # docker rmi -f $(docker images -q | grep -Eiv latest) || true
                    ## Now building remaining microservices
                    app = docker.build("udjindal/vehicle-registry")
                '''
            }
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
