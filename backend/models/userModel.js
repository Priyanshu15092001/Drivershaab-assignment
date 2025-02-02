const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
  },
  password: { 
    type: String, 
    required: true, 
    minlength: [8, "Password must be at least 8 characters"]
  },
});



module.exports = mongoose.model("User", UserSchema);