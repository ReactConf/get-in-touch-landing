FROM node:8.12
RUN usermod -u 1002 node && groupmod -g 1002 node
RUN apt-get update && apt-get -y upgrade

RUN apt-get install apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
      && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
      && apt-get update && apt-get -y install yarn && rm -rf /var/lib/apt/lists/*

WORKDIR /opt/app
COPY . /opt/app
RUN yarn install --production && yarn build

EXPOSE 4000

CMD ["yarn", "prod"]
