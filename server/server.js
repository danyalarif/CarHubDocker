const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const path = require('path')
const userRouter = require('./routes/user')
const dbURL = 'mongodb+srv://danyal:adminadmin@cluster0.f3ray.mongodb.net/carrhub?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())
app.use(express.static('build'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
    })
app.use('/', userRouter)
mongoose.connect(dbURL, (err) => {
    if (err) return
})
app.listen(4000, () => {
    console.log('server listening on port 4000')
})
