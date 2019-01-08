import {initializeSession} from "./session";
import {initializeRoutes} from "./routes";

import express = require('express');
import config = require('config');
import {initializeAuthentication} from "./authentication";

const port = config.get('Server.port') as number;
const host = config.get('Server.host') as string;

const app = express();

initializeSession(app);
//initializeAuthentication(app);
initializeRoutes(app);

app.use(express.static('static'));
app.use(express.static('dist'));

app.listen(port, host, function () {
    console.log('Your app is listening on port ' + port);
});

