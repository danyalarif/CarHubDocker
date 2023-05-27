const { default: mongoose } = require('mongoose')
const Order = require('../models/Order')

class OrderController {
    static async addOrder(req, res, next) {
        try {
            const order = new Order({userid: mongoose.Types.ObjectId(req.body.userid), name: req.body.name, email: req.body.email, 
                address: req.body.address, phoneNo: req.body.phoneNo, quantity: req.body.quantity, carid: mongoose.Types.ObjectId(req.body.carid)})
            await order.save()
        } catch(e) {
            return next(e)
        }
        return res.json({sucess: true})
    }
    static async getOrders(req, res, next) {
        let orders = undefined
        try {
            orders = await Order.find({userid: req.params.id}).populate("carid").populate("userid")
        } catch(e) {
            return next(e)
        }
        return res.json({sucess: true, orders: orders})
    }
    static async deleteOrder(req, res, next) {
        try {
           await Order.deleteOne({_id: req.params.id})
        } catch(e) {
            return next(e)
        }
        return res.json({sucess: true})
    }
}
module.exports = OrderController