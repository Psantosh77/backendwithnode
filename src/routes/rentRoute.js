const express = require('express')
const  { CreateRent , GetRentByRoomNoAndMonth} = require('../controller/RentController')
const router  = express.Router()


router.get("/" , GetRentByRoomNoAndMonth)
router.post("/create" , CreateRent)


module.exports = router;  