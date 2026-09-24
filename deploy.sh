#!/bin/bash
set -e

IMAGE="rvinodrajendran/cicdwebsite:latest"
CONTAINER="cicdwebsite"

echo "Pulling latest Docker image..."
sudo docker pull "$IMAGE"

echo "Stopping old container..."
sudo docker stop "$CONTAINER" 2>/dev/null || true

echo "Removing old container..."
sudo docker rm "$CONTAINER" 2>/dev/null || true

echo "Starting new container..."
sudo docker run -d \
  --name "$CONTAINER" \
  -p 8080:80 \
  "$IMAGE"

echo "Deployment completed!"
