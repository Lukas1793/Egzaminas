const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true,
  },
});

const Register = mongoose.model('Register', RegisterSchema);
module.exports = Register;
