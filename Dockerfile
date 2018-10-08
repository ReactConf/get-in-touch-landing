FROM node:8.12
RUN usermod -u 1002 node && groupmod -g 1002 node
RUN apt-get update && apt-get -y upgrade

RUN apt-get install apt-transport-https


WORKDIR /opt/app
COPY . /opt/app
RUN npm install && npm build && npm export

EXPOSE 4000

CMD ["npm", "prod"]
