const mongoose=require("mongoose")

var adminSchema= new mongoose.Schema({
    Name:{type:String},
	email:{type:String, required: true, index: { unique: true }},
    mobile:{type:Number, required: true, index: { unique: true }},
	
	Password:{type:String},
	Amount:Number,
	
	role:String
  
})


const adminModel=mongoose.model("admin",adminSchema)

module.exports=adminModel