const express = require("express")

const authController = require("../controllers/authController")
const userController = require("../controllers/userController")
const uploadController = require("../controllers/uploadController")

// upoad file
const multer = require('multer')
const imageMimeTypes = ['images/jpeg', 'images/png', 'images/gif']
const uploadPath = "../front-end/public/uploads/profile"
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

const router = express.Router()

// register
router.post('/register', authController.validate('createUser'), authController.createUser)
router.post('/login', authController.validate('signIn'), authController.signIn)
router.get('/logout', authController.logout)

router.get('/:id', userController.userInfo)
router.put('/edit/:id', userController.validate('updateUser'), userController.updateUser)
router.delete('/:id', userController.deleteUser)

router.post('/upload', upload.single('avatar'), uploadController.uploadProfile)

module.exports = router