const express = require('express')
const { body, validationResult } = require('express-validator');
const router = express.Router()   // a function provided by express 
const { index, store } = require('../controller/job')
const { login, signup } = require('../controller/auth')

router.get("", index)
router.post("", store)
router.post("/api/signup", body('name').exists().withMessage("required field"), (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next()
},signup)
router.post("/api/login",login)

module.exports = router;