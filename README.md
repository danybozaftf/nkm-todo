# Dynasty Owner

Dynasty Owner is a fantasy sports game using actual NFL salaries and contracts. [https://dynastyowner.com/](https://dynastyowner.com/)

It is written in TypeScript, using express as main backend framework and Angular as main frontend framework.

# How to start

Both, frontend and backend requires to have [NodeJS](https://nodejs.org/en/) installed. The application is tested and developed in the **10.15.3** version of NodeJS. 

## Getting ready

### Add SSH key to github account

Some dependencies used by the project are private and requires go be authentited in order to install them.

Add SSH Key to your account by following this [guide](https://help.github.com/en/enterprise/2.18/user/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

### Start dependant applications

The core applications are dependant from Postgres, Redis and Elasticsearch. It is required to have those dependencies up and running before starting the core applications.

It is required to have [Docker](https://docs.docker.com/docker-for-windows/install/)  and [Docker Compose](https://docs.docker.com/compose/install/) installed.

```sh
# Clone the repository
git clone git@github.com:crossroads-group/DynastyOwner.git

# Change working directgry
cd DynastyOwner/

# Start containers
docker-compose up
```

_This will download the images and start the dependant applications. If you prefer to run these applications in the background, add the **-d** flag to the docker-compose command._


## Start Core Applications

### UI application

```sh
# Clone the repository
git clone git@github.com:crossroads-group/DynastyOwner.git

# Change working directgry
cd DynastyOwner/ui

# Install dependencies
npm install

# Start the application
npm start
```

_Visit http://localhost:4203 to see the application._

### Core API

```sh
# Clone the repository
git clone git@github.com:crossroads-group/DynastyOwner.git

# Change working directgry
cd DynastyOwner/server

# Install dependencies
npm install

# Transpile TS to JS
npm run gulp:build

# Before starting CoreAPI, start database migrations. It should be done only at first time.
npm run db:migrate

# Start the application
npm start
```

### RealTime API

```sh
# Clone the repository
git clone git@github.com:crossroads-group/DynastyOwner.git

# Change working directgry
cd DynastyOwner/realTime

# Install dependencies
npm install

# Transpile TS to JS
npm run gulp:build

# Before starting RealTime API, start database migrations. It should be done only at first time.
npm run db:migrate

# Start the application
npm start
```
_For development, use **npm run gulp:watch** in order to reload the code automatically_

## Add mock data and start playing

Before start playing/testing in development mode, you need to add mock data and start some job proceses.

```sh

# move to the Core API Folder
cd DynastyOwner/server

# Add mock data
node ./build/server/app/draft/test/seedEverything.js

# Run job for to initialize draft
node ./build/server/app/draft/jobs/draftInitializer.job.js

# Initialize draft engine
node ./build/server/app/draft/jobs/draftEngine.job.js

# Clean up empty past due rooms
node ./build/server/app/mockDraftLobby/jobs/mockDraftLobbySweeper.job.js

# Mock Draft Lobby Initializer Job
node ./build/server/app/mockDraftLobby/jobs/mockDraftLobbyInitializer.job.js

```

With those steps done, the application should be ready to use.
