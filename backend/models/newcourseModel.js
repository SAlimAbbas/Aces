const mongoose=require("mongoose")

const newcourseSchema=new mongoose.Schema({
    courseName:String,
    imgUrl:String,
    mrp:Number,
    price:Number,
    description:String,
    category:String,
    instructor:String,
    rating:String,
    validity:Number

    
})

const newcourseModel=mongoose.model("new_course",newcourseSchema)
module.exports= newcourseModel