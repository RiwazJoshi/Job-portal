const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User')






const login = async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            let status = await bcrypt.compare(req.body.password, user.password)
            if (status) {
                let obj = user.toObject()
                delete obj.password
                let token = jwt.sign(obj, process.env.JWT_SECRET);

                return res.send({
                    token: token
                })
            }
        }

        res.status(401).send({
            msg: "Ivalid Credantials"
        })
    }
    catch (err) {
        next(err)
    }
}

const signup = async (req, res, next) => {

    try {
        let user = await User.create({ ...req.body })
        res.send(user)
    }
    catch (err) {
        next(err)
    }
}
module.exports = {
    login,
    signup

}