const mongoose=require("mongoose")
const express=require("express")
const app=express()
const cors=require("cors")
const userModel=require("./usermodel")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

const port=8080
// pgglLAZLiT6V9Sx4
const dburl="mongodb+srv://Prathmesh11:Prathmesh11@cluster0.o4lbk.mongodb.net/Aces"


const connectionparams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(dburl,connectionparams).then(()=>{
    console.log("connected to db");
}).catch((er)=>{
    console.log(er)
})


app.get("/user",async(req,res)=>{
    const data=new userModel({
        "name":"prathmesh",
        "email":"prathmesh@11"
    })
   
    await data.save()
    res.end("success")
})

app.get("/",(req,res)=>res.send("hello world how are you"))

app.listen(process.env.PORT || port,()=>{
    console.log("server starteed at 8080");
})