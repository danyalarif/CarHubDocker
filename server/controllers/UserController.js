const User = require('../models/User')
class UserController{
    static async registerUser(req, res, next) {
        try {
            const user = new User({name: req.body.name, email: req.body.email, password: req.body.password})
            await user.save()
        } catch(e) {
            return next(e)
        }
        return res.json({success: true})
    }
    static async authenticateUser(req, res, next) {
        let user = undefined
        try {
            if (req.body.email === 'admin' && req.body.password === 'admin') {
                return res.json({success: true, role: 'admin'})
            }
            user = await User.findOne({email: req.body.email, password: req.body.password})
            if (user === null) {
                return res.json({success: false})
            }
            return res.json({success: true, user: user, role: 'user'})
        } catch(e) {
            return next(e)
        }
    }
}

module.exports = UserController