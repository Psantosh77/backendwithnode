const express = require('express')
const  { login} = require('../controller/Auth')
const router  = express.Router()


router.get("/" , login)


module.exports = router;