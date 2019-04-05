let mongoose = require('mongoose');

const adminRegSchema = {username: String, password: String,};
let adminReg = mongoose.model('adminReg',adminRegSchema);

module.exports = adminReg;