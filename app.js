const express = require('express');
let bodyParser = require('body-parser');
let session = require("express-session");
let passport= require('passport');

var users = [
    { id: 1, username: "abcd", password: '1234' },
    { id: 2, username: "test", password: '1234' },
]
// server init
let app  = express();

// middleware
app.use(express.static('./front-end'))   
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({ 
    secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
 }));
app.use(passport.initialize());
app.use(passport.session());


require('./config/db-config');
// require('./routes/users-routes')(app);
require('./routes/admin-route')(app,users);      //admin route import the main server file



module.exports = app;