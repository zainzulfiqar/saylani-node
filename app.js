const express = require('express');
let bodyParser = require('body-parser');

// server init
let app  = express();

// middleware
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// require('./configDb/db-config')
// require('./routes/users-routes')(app);
require('./routes/admin-route')(app);


module.exports = app;