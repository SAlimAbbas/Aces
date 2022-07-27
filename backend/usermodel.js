const mongoose=require("mongoose")

var userSchema = new mongoose.Schema({
    name:{ type: String},
    email:{ type: String},
  
},
{timestamps:true})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel