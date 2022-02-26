const express = require('express')

const router = express.Router()

const contactController = require('../controllers/contactController')

router.post('/', contactController.validate('sendMessage'), contactController.sendMessage)

module.exports = router