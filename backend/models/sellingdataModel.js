const mongoose=require("mongoose")

const sellSchema=new mongoose.Schema({
    
	courseid:String,
	validity:Number,
	sellername:String,
    mrp:Number,
    description:String,
    image: String,
    courseName:String,
    category:String,
    selling_price:Number,
    instructor:String,
    rating:String
    
})

const sellModel =mongoose.model("sellingdata",sellSchema)

module.exports=sellModel