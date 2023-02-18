const express = require("express")
const app = express()
const cors = require('cors')
require('./config/database')
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.raw());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))



app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/job'))
app.use(express.static('uploads'))
const jobs_route = require('./routes/job')
app.use("/api/jobs", jobs_route)
app.use(require('./routes/auth'))






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
app.listen((process.env.PORT || 8000), "0.0.0.0/0",() => {
    console.log("server started");
})