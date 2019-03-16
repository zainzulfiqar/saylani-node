let multer = require('multer');
let path = require('path');
const customConfig  = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, './uploads')
    },
    filename:(req,file,next)=>{
        next(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname) );
    }
});

// init upload
let upload = multer({
storage:customConfig
})


module.exports = upload;

