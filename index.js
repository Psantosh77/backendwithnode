require("dotenv").config()

const bodyparser = require('body-parser')
const express = require("express")
const morgan = require('morgan')
const  app = express()
const connectDB = require("./config/dbConnection")
const port = process.env.PORT || 9000;

const AuthRoute = require("./src/routes/Auth")
const HouseRoute = require("./src/routes/HouseRoute")
const Room = require("./src/routes/RoomRoute")
const Rent = require("./src/routes/rentRoute")

//middleware
app.use(morgan('combined'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//Route Middleware
app.use("/" , AuthRoute)
app.use("/house" , HouseRoute)
app.use("/room", Room)
app.use("/rent" , Rent)

app.listen(port ,()=>{
    connectDB()
    console.log("Server is running on " , port)
})