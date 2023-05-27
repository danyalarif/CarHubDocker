const Car = require('../models/Car')

class CarController {
    static async addCar(req, res, next) {
        try {
            const car = new Car({name: req.body.name, description: req.body.description, price: req.body.price, image: req.body.image})
            await car.save()
        } catch(e) {
            return next(e)
        }
        return res.json({success: true})
    }
    static async getCars(req, res, next) {
       let cars = undefined
        try {
            cars = await Car.find()
        } catch(e) {
            return next(e)
        }
        return res.json({success: true, cars: cars})
    }
}

module.exports = CarController