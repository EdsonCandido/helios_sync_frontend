#!/bin/bash
docker build -t helios-frontend . 

if docker ps -a | grep -q "helios-frontend-c"; then
    docker stop helios-frontend-c
    docker rm helios-frontend-c
fi

docker run -p 81:80 --name helios-frontend-c helios-frontend