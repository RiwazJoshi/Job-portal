const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1]
    let user = null;
    if (token) {
        try {
            user = jwt.verify(token, process.env.JWT_SECRET);
            req.user = user;
        }
        catch (err) {
            return res.status(401).send({
                msg: "Invalid",
                error: err.message
            })
        }
    }
    if (user) {
        next()
    }
    else {
        return res.status(401).send({
            msg: "Invalid Token"
        })
    }

}
const isProvider = (req, res, next) => {

    if (req.user.role === "jobprovider") {
        next()
    }
    else {
        res.status(403).send({
            msg: "Forbidden"
        })
    }
}
module.exports = {
    authenticate,
    isProvider
}
