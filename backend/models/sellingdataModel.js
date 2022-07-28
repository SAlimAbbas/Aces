const mongoose=require("mongoose")

const transactionSchema=new mongoose.Schema({
    
	"courseid":String,
	"validity":Number,
	"sellerid":Number,
	"sellername":String
    
})

const transactionModel =mongoose.model("product",transactionSchema)

module.exports=transactionModel