# www.natalierodriguez.co.uk

Natalue Rodriguez portfolio site.

## Technologies

- Node.js [Hapi](https://github.com/hapijs/hapi) server
- [Dokku](http://progrium.viewdocs.io/dokku/) Docker-based hosting

## Development

Interact with this project via `npm run`. The following npm scripts comprise the main API (check
`package.json` for more):

Name | Description
--- | ---
`start` | Starts the server in production mode. Dokku runs this script automatically after deployment to start the app.
`start:dev` | Starts the server in development mode, restarting the server and rebuilding when local files change.

## Deployment

This app conforms to the Heroku Node.js buildpack format, and is therefore deployable on Dokku.
