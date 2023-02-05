
// const multer = require('multer')
// const path = require('path')



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
//         cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// })

// // const upload = multer({ dest: 'uploads/' })

// const upload = multer({ storage: storage })
// // module.exports = upload
// module.exports = upload.array('images', 12)




const path = require('path');
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

module.exports = upload.single('images')




// module.exports = multer({
//     storage:multer.diskStorage({}),
//     fileFilter : (req,res,cb)=>{
//         let ext = path.extname(file.originalname);
//         if (ext!== ".jpg" && ext !== "jpeg"  && ext !== "png") {
//             cb(new Error("Unsupported file type"),false)
//             return;
//         }
//         cb(null,true);
//     },
// });