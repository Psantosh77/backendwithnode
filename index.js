require("dotenv").config()
const express = require("express")
const  app = express()
const port = process.env.PORT || 9000;

app.get("/", (req, res)=>{
    res.send("Hello sANTOSH")
})

app.listen(port ,()=>{
    console.log("Server is running on " , port)
})