pipeline {
    agent any
    stages {
        stage('Build image') {
        steps {
            sh '''
                #!/usr/bin/env bash
                # TAG=$BUILD_NUMBER
                TAG=latest
                build_all() {
                    echo "The base image has been rebuilt. Deleting all other containers and images ahead of rebuild"
                    #docker rm -f $(docker ps -a -q) || true
                    # For now, deleting all images other than the the one with id=IMAGE_ID. If this turns out to be over-raeaching it can be susbtitutued with the below
                    # docker rmi $(docker images | grep -Ei $TAG | grep -Eiv $TAG
                    # docker rmi -f $(docker images -q | grep -Eiv $TAG) || true
                    #docker-compose -f docker-compose-app.yml build
                    docker build -t udjindal/ubuntu-vehicle-registry .
                }
                build_all
            '''
            }
        }


        stage('Push to DockerHub'){
            steps {
                sh '''
                docker push udjindal/ubuntu-vehicle-registry:latest
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
