const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;
const {body, validationResult} = require("express-validator")

exports.validate = (method) => {
    switch (method) {
      case 'updateUser': {
       return [ 
          body('name', "Name doesn't exists").exists(),
          body('number', "Phone Number is Invalid").exists().isInt(),
          body('bio', "bio is required").exists()
         ]   
      }
    }
}

module.exports.userInfo = async (req, res) => {
  // check if the id is valid
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send({ msg: "Unknown ID" });
  try {
    const user = await UserModel.findOne({ _id: req.params.id }).select(
      "-password"
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send("Unknown ID: " + req.params.id);
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  try {
    const user = await UserModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        number: req.body.number,
        bio: req.body.bio,
      }
    );
    res.status(200).json({ msg: "Success updated the user" });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ msg: "Unknown ID" });
  }
  try {
    await UserModel.findOneAndRemove({ _id: req.params.id });
    res.status(200).json({ msg: "User removed succesffuly" });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};
