
let users = require('../models/models-user');

module.exports = (server)=>{
    server.get('/getAllUsers',(req,res)=>{
        users.find()
        .limit(10)
        .sort({balance:1})
        .exec((err,users)=>{
            if(err){
                return res.send(err);
            }
            res.send(users);
        });
    });
    server.get('/addUser',(req,res)=>{
        let user = new users({name:"zain",email:"abc@exmple.com",balance:2000});
        user.save((err,user)=>{
            if (err) {
                return res.send(err)
            }
            res.send(user);
        });
    
    });
}