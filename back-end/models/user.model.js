const mongoose = require('mongoose')
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name not provided"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email already exists in database"],
        lowercase: true,
        trim: true,
        required: [true, "email not provided "],
        validate: [isEmail],
    },
    number: {
        type: String,
        required: [true, "Phone Number is required"]
    },
    avatar: {
        type: String,
        default: "./uploads/profile/user.png"
    },
    bio: {
        type: String,
    },
    admin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email')
  };

module.exports = mongoose.model('User', userSchema)