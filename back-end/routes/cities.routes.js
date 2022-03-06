const express = require('express')
const citiesController = require('../controllers/citiesController')

const router = express.Router()
// upload file
const multer = require('multer')
const imageMimeTypes = ['images/jpeg', 'images/png', 'images/gif']
const uploadPath = "../front-end/public/uploads/cities"
var storage = multer.diskStorage({
    destination: uploadPath,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
})
const upload = multer({storage: storage})

router.get('/', citiesController.index)

router.post('/create', [upload.single('image'), citiesController.validate('create')], citiesController.create)

module.exports = router