const express = require('express')

const faqsController = require('../controllers/faqsController')
const router = express.Router()

router.get('/', faqsController.getAll)

router.post('/create',faqsController.validate('createFaqs'), faqsController.createFaqs)

module.exports = router