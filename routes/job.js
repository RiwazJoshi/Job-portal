const express = require('express');
const router = express.Router();

const upload = require('../middleware/multer')
const { index, store, update, remove } = require('../controller/job');
const { authenticate, isProvider } = require('../middleware/auth')
// const uploadImages = require('../middleware/multer')
const multer = require('../middleware/multer')


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
router.post("", authenticate, isProvider, upload.single('image'), store)
router.put("/:id", authenticate, isProvider, upload.single('image'),  update)
router.delete("/:id", authenticate, isProvider, remove)

module.exports = router;