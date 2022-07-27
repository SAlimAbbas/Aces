const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema({
    courseName:String,
    imgUrl:String,
    mrp:Number,
    price:Number,
    description:String,
    category:String,
    instructor:String,
    rating:String

    
})

const courseModel=mongoose.model("course",courseSchema)
module.exports= courseModel