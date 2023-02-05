const express = require('express');
const router = express.Router();

// const upload = require('../middleware/multer')
const { index, store, update, remove } = require('../controller/job');
const { authenticate, isProvider } = require('../middleware/auth')
const uploadImage = require('../middleware/multer')

// const multer = require('../middleware/multer')

// const multer = require('multer')
// const upload = multer()
// const formidable = require('formidable');

// const sendImage = require('../middleware/formidable')


router.get("", index)
// router.post("", authenticate, isProvider, multer, async (req, res) => {

//     if (!req.files) return res.send('Please upload an image');

//     const { image } = req.files
//     const cloudFile = await upload(req.files.image);
//     console.log(cloudFile)

//     res.status(201).json({
//         message: 'Image uploaded successfully',
//         imageUrl: cloudFile.url
//     })
// }, store)
// router.put("/:id", authenticate, isProvider, multer, async (req, res) => {

//     if (!req.files) return res.send('Please upload an image');

//     const { image } = req.files;
//     const cloudFile = await upload(req.files.image);
//     console.log(cloudFile)

//     res.status(201).json({
//         message: 'Image uploaded successfully',
//         imageUrl: cloudFile.url
//     })
// }, update)

// router.post("", authenticate, isProvider,uploadImages, store)




// router.post("", authenticate, isProvider, sendImage, store)
// router.post("",  store)
// router.post("", upload.single("image"), (req, res, next) => {
// router.post("", upload.any(), (req, res, next) => {
//     console.log(req.file)
//     console.log(req.files)
// console.log(req.body)

// })
router.post("", authenticate, isProvider,uploadImage, store)
router.put("/:id", authenticate, isProvider, update)
router.delete("/:id", authenticate, isProvider, remove)

module.exports = router;