// User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  height :{
    type: Number,
    required: true
  },
  weight :{
    type: Number,
    required: true
  },
  numberOfSession :{
    type: Number,
    required: true
  },
  objectif: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model('users', userSchema);


module.exports = UserModel;

