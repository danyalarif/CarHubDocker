const express = require('express')
const multer = require('multer')
const router = express.Router()
const UserController = require('../controllers/UserController')
const CarController = require('../controllers/CarController')
const OrderController = require('../controllers/OrderController')

router.post('/register', UserController.registerUser)
router.post('/login', UserController.authenticateUser)
router.post('/cars/addCar', CarController.addCar)
router.get('/cars/getCars', CarController.getCars)
router.post('/orders/addOrder', OrderController.addOrder)
router.get('/orders/getOrder/:id', OrderController.getOrders)
router.get('/orders/deleteOrder/:id', OrderController.deleteOrder)

module.exports = router