const UserModel =  require("../models/user.model")
const jwt = require('jsonwebtoken')
const maxAge = 3 * 24 * 60 * 60 * 1000 // time to expire the token
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcrypt');

const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: 3 * 24 * 60 * 60 * 1000
    })
}

exports.validate = (method) => {
    switch (method) {
      case 'createUser': {
       return [ 
          body('name', "Name doesn't exists").exists(),
          body('email', 'Invalid email').exists().isEmail(),
          body('number', "Phone Number is Invalid").exists().isInt(),
          body('password', "Password is required").exists()
         ]   
      }
      case 'signIn': {
        return [ 
            body('email', 'Invalid email').exists().isEmail(),
            body('password', "Password is required").exists()
        ]   
      }
    }
}

module.exports.createUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const { name, number, email, password} = req.body
    try{
        const user = await UserModel.create({
            name: name,
            number: number,
            email: email,
            password: bcrypt.hashSync(password, 8),
        })
        res.status(201).json({user: user._id})
    }catch(err) {
        return next(err)
    }
}

module.exports.signIn = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const {email, password} = req.body
    try{
        const user = await UserModel.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge})
        res.status(201).json({user: user._id})
    }catch(err) {
        res.status(200).send(err)
        return next(err)
    }
}

module.exports.logout = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1})
    res.status(200).json({msg: "logout success"})
}
