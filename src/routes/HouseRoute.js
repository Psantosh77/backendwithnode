const express = require('express')
const  { CreateHouse , GetHouse , GetHouseWithRoom} = require('../controller/HouseController')
const router  = express.Router()


router.get("/" , GetHouse)
router.post("/create" , CreateHouse)
router.get("/housewithroom" , GetHouseWithRoom)


module.exports = router;   