const express = require('express')
const  { CreateRooms , GetRoom} = require('../controller/RoomController')
const router  = express.Router()


router.get("/" , GetRoom)
router.post("/create" , CreateRooms)


module.exports = router;   