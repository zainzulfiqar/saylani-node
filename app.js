const express = require('express');
let bodyParser = require('body-parser');

let app  = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

require('./configDb/db-config')
require('./routes/users-routes')(app);



module.exports = app;