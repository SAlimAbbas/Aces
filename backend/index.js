const mongoose=require("mongoose")
const express=require("express")
const app=express()
const cors=require("cors")
const userModel=require("./models/usermodel")
 const courseModel=require("./models/coursemodel")
 const adminModel=require("./models/adminmodel")


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
        Name:"Alim",
        email:"Alim@gmail.com",
        mobile:7777777777,
        Buy:[],
        Sell:[],
        Password:"alim",
        Amount:2000,
        transactions:[],
        role:"user"
    })
   
    await data.save()
    res.end("success")
})

app.get("/admin",async(req,res)=>{

    const data=new adminModel({
        Name:"admin",
        email:"admin@gmail.com",
        mobile:1111111111,
       
        Password:"admin",
        Amount:2000,
       
        role:"admin"
    })
   
    await data.save()
    res.end("success")

})

app.get("/products",async(req,res)=>{

    const data=new courseModel({
        "courseName":"User Experience (UX): The Ultimate Guide to Usability and UX",
        "imgUrl":"https://img-c.udemycdn.com/course/240x135/28258_8a7e_13.jpg",
        "mrp":2999,
        "price":2999,
        "description":"Get a job in UX and build your user research and UX design skills with this hands-on user experience training course.",
        "category":"design",
        "instructor":"David Travis",
        "rating":"4.7"  
    })
   
    await data.save()
    res.end("success")

})

app.get("/courses",async(req,res)=>{
   
    const {category}=req.body
  if(category){
    const data= await courseModel.find({category})
    console.log("data is",data);
    res.end(JSON.stringify(data))
  }
  else{
    const data= await courseModel.find()
    res.end(JSON.stringify(data))
  }
    
  
  
})

app.get("/",(req,res)=>res.send("hello world how are you"))

app.listen(process.env.PORT || port,()=>{
    console.log("server starteed at 8080");
})