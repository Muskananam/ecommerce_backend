const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  name: String,
  fathername: String,
  dob:Date,
  branch:String,
  rollno:String,
  section:Number,
  address:String,
  mobileno:Number,
  email: String,
  password: String,
});

const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;