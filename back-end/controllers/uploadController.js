const UserModel = require('../models/user.model')

module.exports.uploadProfile = async (req, res) => {
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
        await UserModel.findByIdAndUpdate(
            req.body.userId,
            { $set: {avatar: "./uploads/profile/" + fileName } }
        )
        res.status(200).json({ msg: "Succesful updated" });
    }catch(err){
        res.status(400).json({ msg: err.message });
    }
}