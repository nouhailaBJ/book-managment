const { body, validationResult } = require('express-validator')
const faqModel = require('../models/faq.model')

module.exports.getAll = async (req, res) => {
    try {
        const faqs = await faqModel.find({})
        res.status(200).json(faqs)
    }catch(err){
        res.status(400).json({err})
    }
}

exports.validate = (method) => {
    switch(method){
        case 'createFaqs' : {
            return [
                body('title', "title doesn't exists").exists(),
                body('desc', "desc doesn't exists").exists(),
                body('active', "active doesn't exists").exists(),
            ]
        }
    }
}

module.exports.createFaqs = async (req, res) => {
    const {title, desc, active} = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        res.status(400).json({errors: errors.array() })
        return ;
    }
    try{
        const faq = await faqModel.create({
            title: title,
            desc: desc,
            active: active,
        })
        res.status(200).json({faq: faq})
    }catch(err) {
        res.status(400).json({err})
    }
}