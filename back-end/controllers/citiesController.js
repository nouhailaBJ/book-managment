const cityModel = require('../models/city.model')
const { body, validationResult } = require('express-validator')

module.exports.index = async (req, res) => {
    try {
        const cities = await cityModel.find({})
        res.status(200).json(cities)
    }catch(err){
        res.status(400).json({err})
    }
}
exports.validate = (method) => {
    switch(method){
        case 'create' : {
            return [
                body('name', "name doesn't exists").exists(),
            ]
        }
    }
}

module.exports.create = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        res.status(400).json({errors: errors.array() })
        return ;
    }
    try{
        if(req.file.mimetype !== "image/jpg" &&
        req.file.mimetype !== "image/png" &&
        req.file.mimetype !== "image/jpeg")
        return res.status(404).json({err: "Invalid type of Image"})
        if (req.file.size > 500000) 
            return res.status(404).json({err: "Invalid File"})
    }catch(err){
        return res.status(404).json({err})
    }
    const fileName = req.file != null ? req.file.filename : null

    try{
        const city = await cityModel.create({
            name: req.body.name,
            image: "/uploads/cities/" + fileName
        })
        res.status(200).json(city)
    }catch(err) {
        res.status(400).json({err})
    }
}