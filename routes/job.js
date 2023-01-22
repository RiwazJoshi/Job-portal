const express = require('express');
const router = express.Router();

const { index, store, update, remove } = require('../controller/job');
const { authenticate, isProvider } = require('../middleware/auth')
const uploadImages = require('../middleware/multer')

router.get("", index)
router.post("", authenticate, isProvider, uploadImages, store)
router.put("/:id", authenticate, isProvider, uploadImages, update)
router.delete("/:id", authenticate, isProvider, remove)

module.exports = router;