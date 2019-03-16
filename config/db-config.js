let mongoose = require('mongoose');

// let db_url = "mongodb://localhost:27017/books'";
let db_url = "abc";

mongoose.connect(db_url,{useNewUrlParser:true});

let db = mongoose.connection;

db.on('error',console.error.bind(console,"db not connect"));

db.once('open', ()=>{console.log('Success')});