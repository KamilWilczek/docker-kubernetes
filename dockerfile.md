```docker version```

```docker ps```

```docker image ls```

```docker ps --all```

```docker build .```

```docker run <container id>```
```docker run <container id> <command to override>```

```docker start <container id>```
```docker start -a <container id>```

```docker stop <container id>```
```docker kill <container id>```

```docker exec -it <container id> <command>```
```docker exec -it <container id> sh -> runs terminal inside container```

# specifying file used to build the image
```docker build -f <filename> .```
```docker build -f Dockerfile.dev .```

# tagging image to use name istead of id
```docker build -t kamwil314/redis:latest .```
kamwil314/redis:latest = your_docker_id / repo/project_name : version
```docker build -t kamwil314/redis:latest .``` = docker build tag_of_the_image specifies_the_dir_of_files/folders_to_use_for_the_build(build_context)

# creating image from container
## flag -c allows to type new command (CMD)
```docker commit -c 'CMD ["redis-server"]' CONTAINERID```
## for windows
```docker commit -c "CMD 'redis-server'" CONTAINERID```

# Docker run with port mapping
```docker run -p <localhost port>:<container port> <container id>```
```docker run -p 8080:8080 kamwil324/simpleweb```
## interactive mode
```docker run -it -p <localhost port>:<container port> <container id>```

# run docker with volumes
## pwd not for windows, for example bash
```docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image id>```
-v /app/node_modules -> put a bookmark on the node_modules folder      
-v $(pwd):/app -> map the pwd into the './app' folder                  

```docker-compose up``` === docker run <image name>
```docker-compose up --build``` === docker build . AND docker run <image name>

# Launch in backgorund
```docker-compose up -d```

# Stop containers
```docker-compose down```

# Status codes
0 -> We exited and everything is OK
1, 2, 3, etc -> We exited because something went wrong

# Restart policies
```"no"``` -> Never attempt to restart this . container if it stops or crashes
```always``` -> If this container stops *for any reason* always attempt to restart it
```on-failure``` -> Only restart if the container stops with an error code
```unless-stopped``` -> Always restart unless we (the developers) forcibly stop it

```docker-compose ps``` -> only in dir where is docker-compose.yml file

# watching for changes for Windows 10
```"scripts": {"start": "WATCHPACK_POLLING=true react-scripts start",```

# Dockerfile syntax
EXPOSE - does nothing on local machine, it is for deployment services like AWS, maps traffic to container in AWS