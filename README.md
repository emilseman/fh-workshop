# Feature Hub demo application
This is a simple minimal demonstration how Feature Hub can be integrated, with couple of feature application and services.

Repository is done as lerna's monorepo. 

## Requirements
Have yarn installed, node.js (version >= 10), git and some favourite IDE.

## Setup
Run 
`yarn install`


#### Starting integrator
Run `yarn watch`, all applications should be built and integrator should be accessible on `http://localhost:3001`.

### How it works
#### Feature-app-1
Is copied into integrator/dist-es after build and served with node.js server from integrator under `/public` folder;
#### Feature-app-external
When ran in watch mode (see above), it is served on this location: 
`http://localhost:3003/feature-app-external.js`
#### fa (feature app)
When ran in watch mode (see above), it is served on this location: 
`http://localhost:3002/fa.js`
#### button-service
