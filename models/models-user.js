let mongoose = require('mongoose');

const userSchema = {name: String, email: String, balance: Number};

const user = mongoose.model('users',userSchema);

module.exports = user;