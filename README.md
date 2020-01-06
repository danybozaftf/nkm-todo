# Dynasty Owner

Dynasty Owner is a fantasy sports game using actual NFL salaries and contracts. [https://dynastyowner.com/](https://dynastyowner.com/)

It is written in TypeScript, using express as main backend framework and Angular as main frontend framework.

## Getting ready

### Add SSH key to github account

Some dependencies used by the project are private and requires authentication. Add SSH Key to your account by following this [guide](https://help.github.com/en/enterprise/2.18/user/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

### Install dependant apps

The core applications depends on Postgres, Redis and Elasticsearch. Make sure you have those application up and running before starting the core apps.

Use [Docker](https://docs.docker.com/docker-for-windows/install/)  and [Docker Compose](https://docs.docker.com/compose/install/) to start these applications.

```sh
# Clone the repository
git clone git@github.com:crossroads-group/DynastyOwner.git

# Change working directgry
cd DynastyOwner/

# Start containers
docker-compose up
```

This process should also create two directories in your local machine: `/data/dynasty_owner_local` and `/data/dynasty_owner_local_dev`. Make sure these folders exist, if not create them.


## How to start

Both, frontend and backend requires to have [NodeJS](https://nodejs.org/en/) installed. The application is tested and developed in the **10.15.3** version of NodeJS. 


### UI application

```bash
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

```bash
# Clone the repository
git clone git@github.com:crossroads-group/DynastyOwner.git

# Change working directgry
cd DynastyOwner/server

# Install dependencies
npm install

# Transpile TS to JS
npm run gulp:build

# Before starting CoreAPI, start database migrations. It should be done only at first
npm run db:migrate

# Start the application
npm start
```

For development, use **npm run gulp:watch** in order to reload the code automatically

### RealTime API

```bash
# Clone the repository
git clone git@github.com:crossroads-group/DynastyOwner.git

# Change working directgry
cd DynastyOwner/realTime

# Install dependencies
npm install

# Transpile TS to JS
npm run gulp:build

# Before starting RealTime API, start database migrations. It should be done only at first
npm run db:migrate

# Start the application
npm start
```
For development, use **npm run gulp:watch** in order to reload the code automatically

### Add mock data and start playing

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

## License

© 2019 Dynasty Owner – All Rights Reserved
