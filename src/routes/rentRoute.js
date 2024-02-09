const express = require('express')
const  { CreateRent , GetRentByRoomNoAndMonth , UpdateRent} = require('../controller/RentController')
const router  = express.Router()


router.post("/" , GetRentByRoomNoAndMonth)
router.post("/create" , CreateRent)
router.put("/update", UpdateRent)


module.exports = router;  