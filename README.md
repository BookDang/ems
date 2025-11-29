# Getting Started

## Docker Dev Setup Guide

### First Time Setup

1. Install Docker: [Docker Download](https://www.docker.com/products/docker-desktop)
2. Start the development environment:
    ```bash
    docker compose -f docker-compose.dev.yml up --build
    ```
    #### Check running containers:
    ```bash
    docker ps
    ```
        
    #### Access the container shell:
    ```bash
    docker exec -it <container_name> /bin/bash
    ```
    Replace `<container_name>` with the name or ID of the container you want to access.


### Subsequent Runs

1. Restart the development environment:
    ```bash
    docker compose -f docker-compose.dev.yml up
    ```
2. Stop the environment when not in use:
    ```bash
    docker compose -f docker-compose.dev.yml down
    ```
-----------------------