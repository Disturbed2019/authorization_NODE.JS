const express = require('express')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const authRouter = require('./authRouter')




const app = express();
app.use(express.json())


const URL = 'mongodb://localhost:27017/login'

app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(URL)
        app.listen(PORT, ()=> {
            console.log(`server is running on port ${PORT}`)})


    } catch (e) {
        console.log(e)
    }
}
start()