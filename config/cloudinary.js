// const uploadImages = require('../middleware/multer')
// const cloudinary = require('cloudinary').v2
var cloudinary = require('cloudinary').v2;
require('dotenv').config()







// cloudinary.config({

//     cloud_name: 'dw84ekvpb',
//     api_key: "226321283569126",
//     api_secret: "0LeXCt8XuL2sD2lvv3KSyJMfAbA"
// });
// cloud_name: process.env.CLOUD_NAME,
// api_key: process.env.API_KEY,
// api_secret: process.env.API_SECRET,


module.exports = cloudinary


// const uploadImagesCloudinary = async (fileToUploads) => {
//     return new Promise(
//         (resolve) => {
//             cloudinary.uploader.upload(fileToUploads, (result) => {
//                 resolve(
//                     {
//                         url: result.secure_url,
//                     },
//                     {
//                         resource_type: "auto"
//                     }
//                 )
//             })
//         }
//     )
// }
// const opts = {
//     overwrite: true,
//     invalidate: true,
//     resource_type: "auto"
// }
// let uploads = (file, folder) => {
//     return new Promise((resolve, reject) => {
//         cloudinary.uploader.upload(file, (result) => {
//             resolve({
//                 url: result.url,
//                 id: result.public_id
//             })
//         }, {
//             resource_type: "auto",
//             folderr: folder
//         })
//     })
// }

// module.exports = uploads

// module.exports = cloudinary
// cloudinary.js

// const upload = async (file) => {
//   const image = await cloudinary.uploader.upload(

//     file,
//     (result) => result

//   );
//   return image;
// };

// const upload = async () => {
//     const image = await cloudinary.uploader.upload(
//         uploadImages
//     )
//     return image;
// };

// module.exports = { upload };
