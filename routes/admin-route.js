let upload =require('../config/multer-config')


module.exports = (server)=>{
 
    server.post('/addProduct',upload.array('productImage',2),(req,res)=>{
        console.log(req.body)
        res.send('oky')
    });

}