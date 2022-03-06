const express = require('express')

const faqsController = require('../controllers/faqsController')
const { requireAuth } = require('../middleware/auth.middleware')
const router = express.Router()

router.get('/', faqsController.getAll)

router.post('/create',faqsController.validate('createFaqs'), faqsController.createFaqs)

module.exports = router