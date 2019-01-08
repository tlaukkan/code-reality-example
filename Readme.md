# Code Reality Example

This is work in progress...

This is example project for creating networked building networked extended reality (XR) experiences with Code Reality framework and A-Frame framework.

In addition you will need aframe-database infrastructure servers for scene
synchronization and persistence.

## Development mode

To run the node http server in development mode you need to run locally the
following commands in separate terminals:

1) npm run dev:node
2) npm run dev:browser

Browse to: http://localhost:3001/

## Hosting

### Heroku

Add to heroku:

    heroku create --region eu construction-demo
    git push heroku master
    heroku logs -t
    heroku logs -t --dyno=web

Build and release to Heroku:

    npm run build:browser
    git add .
    git commit -m "build distribution."
    git push
    git push heroku master
