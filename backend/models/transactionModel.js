const mongoose=require("mongoose")

const transactionSchema=new mongoose.Schema({
    
    "Courseid":String,
	"Buyersid":String,
	"sellersid":String,
	"sellingtime":String,
	"price":Number,
	"validity":Number
    
})

const transactionModel =mongoose.model("product",transactionSchema)

module.exports=transactionModel