# Specify a base image
FROM node:alpine3.15

# Any following command will be executed relative to this path in the container. So 'COPY ./ ./' will copy to /usr/app. If folder does not exist it will be created automatically. 'usr' is safe place in linux to place own applications.
WORKDIR /usr/app

# Install some dependencies
# COPY 'Path to folder to copy from *on your machine* relative to build context' 'Place to copy stuff to inside *the container*'
COPY ./package.json ./
RUN npm install
COPY ./ ./
# Default command
CMD ["npm", "start"]