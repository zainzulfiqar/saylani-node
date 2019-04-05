var upload =require('../config/multer-config');
let adminReg =require('../models/models-admin');
let bcrypt =require('bcrypt');
module.exports = (server,users)=>{
   
    server.post('/admin',(req,res)=>{
        let passwordHash = bcrypt.hashSync(req.body.password,  bcrypt.genSaltSync(10));
          let adminUser =new adminReg({username:req.body.username,password:passwordHash})
          adminUser.save();
        res.send("oky");
    });
     
    server.post('/adminlogin',(req, res)=>{
        adminReg.findOne({ username:req.body.username },(err,user)=> {
            if (!user) {
                // res.redirect('/login');
                res.json({username:'not valid'})
            }
           else{
          bcrypt.compare(req.body.password,user.password,function(err, password) {
              if(err) res.err;
            if(password == false){
                 // res.redirect('/login');
                res.json({password:'not valid'})
            }
            else{
                 req.session.userId =JSON.stringify(user._id);
                // res.redirect('/dashboard');
                res.json({user:'user find its'})
            }
        });
    }
        }); 
               
       
    });
    server.get('/dashboard', function (req, res) {

      if (!req.session.userId ){
            res.send("Login Required to visit this page")
        } else {
            res.json({user: "Yes you're logged in, and your data is available here: "})
        }

    });
    server.get('/logout',(req,res)=>{
        req.session.destroy()
        res.redirect('/dashboard')
    });
    server.post('/addProduct',upload.array('productImage',2),(req,res)=>{
        console.log(req.body.username)
        res.send('oky')
    });

}