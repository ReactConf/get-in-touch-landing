#!/usr/bin/env sh
bash

chown node:node -R .


npm install

#npm run build

npm run export
