# Getting Started

## Docker Development Setup Guide

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

---

## Docker Production Setup Guide

### First Time Setup

1. Build and start the production environment:
    ```bash
    docker compose -f docker-compose.prod.yml up --build
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

1. Restart the production environment:
    ```bash
    docker compose -f docker-compose.prod.yml up
    ```
2. Stop the environment when not in use:
    ```bash
    docker compose -f docker-compose.prod.yml down
    ```

**Note**: To remove all images, containers, and volumes:

```bash
# Remove all containers
docker rm -f $(docker ps -aq)

# Remove all images
docker rmi -f $(docker images -q)

# Remove all volumes
docker volume rm $(docker volume ls -q)

# Remove everything
docker system prune -a -f --volumes

# Remove builders
docker builder prune -a -f
```
