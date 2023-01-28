const express = require("express")
const app = express()
const UserModal = require('./model/User')
const JobModal = require('./model/Job')
require('./config/database')
require('dotenv').config()
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/job'))
app.use(express.static('uploads'))
const jobs_route = require('./routes/job')
app.use("/api/jobs", jobs_route)
app.use(require('./routes/auth'))
const fileUpload = require("express-fileupload");
app.use(
    fileUpload({
      useTempFiles: true
    })
);



app.use((err, req, res, next,) => {
    let status = 500;
    let msg = 'Server Error'
    let errors = []


    if (err.name == "ValidationError") {
        status = 400
        msg = "Bad Request"
        Object.entries(err.errors).forEach((err) => {
            errors.push({
                msg: err[1].message,
                param: err[0]
            })
        })
    }

    res.status(status).send({
        msg,
        error: err.message,
        errors
    })
})
app.listen(8000, () => {
    console.log("server started");
})