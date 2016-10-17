FROM mhart/alpine-node:6

# Create app directory
RUN mkdir -p /src

# Install app dependencies
COPY package.json yarn.lock /src/
RUN \
 	cd /src && \
	echo "# REPLACE ME" > README.md && \
  npm install -g yarn && \
	yarn install --pure-lockfile && \
	yarn cache clean

# Bundle app source
COPY . /src

WORKDIR /src

EXPOSE 8080

# Start with npm bc yarn hates babel-node
CMD [ "npm", "run", "start" ]
