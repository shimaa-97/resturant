 const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
     name: String,
     password: Number
})
const User = mongoose.model("user", userSchema) 


 module.exports=User


     