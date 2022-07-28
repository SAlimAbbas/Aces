const mongoose=require("mongoose")
const express=require("express")
const app=express()
const cors=require("cors")
var jwt = require('jsonwebtoken');
const userModel=require("./models/usermodel")
 const courseModel=require("./models/coursemodel")
 const adminModel=require("./models/adminmodel")
 const transactionModel=require("./models/transactionModel")


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

app.post("/login",async(req,res)=>{
    const {name}=req.body
    const token=jwt.sign({"name":name},"SECRETKEY")

    res.end(token)
})

app.get("/mycourse",async(req,res)=>{
    const {token}=req.body
    const user=jwt.verify(token,"SECRETKEY")
    const allcourses=[]
    const userdetails=await userModel.findOne({Name:user.name})
    const t=[]
    // console.log(userdetails.Buy)
    userdetails.Buy.map(async(elem)=>{
       
       var tempdata= await courseModel.findOne({id:elem})
    //    console.log("data is",tempdata)
       allcourses.push(tempdata)
    
      
    })
    setTimeout(()=>{
        res.end(JSON.stringify(allcourses))
    },2000)
   
   
})
app.post("/buy",async(req,res)=>{
    const {token,courseid}=req.body
    // token verified
    const user=jwt.verify(token,"SECRETKEY")
    console.log("user is ",user)
    // got username from token 
   const requser=await userModel.findOne({Name:user.name})
//    got course id from body

   const reqcourse=await courseModel.findOne({id:courseid})

   if(reqcourse.Amount>requser.Amount){
    res.end("Inssufficient Balance")
   }
   else{
        
//    to update Amount of admin after puchasing the product
   const reqadmin=await adminModel.findOne()
   const check_duplicate=await userModel.find( { Buy: { $in: [ courseid ] } }, { Name: user.name } )
    console.log("duplicate checking is ",check_duplicate)
   if(!check_duplicate[0]){
        // cousrs add to user Buy section
    await userModel.updateOne(
        { Name: user.name },
        { $push: { Buy: courseid } }
     )
    // amout deducted from user account 
     await userModel.updateOne(
        {Name:user.name},
        {$set:{"Amount":requser.Amount-reqcourse.price}}
     )
    //  amount added in admin account
     await adminModel.updateOne({
        Name:"admin"
     },{$set:{"Amount":reqadmin.Amount+reqcourse.price}})
    // await userModel.updateOne( { Name: user.name  }, { $pop: { Buy: -1 } } )
     const checkuser=await userModel.find({Name:user.name})
    res.end(JSON.stringify(checkuser))
   }
   else{
    res.end("Course already exist")
   }


   }



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



app.post("/courses",async(req,res)=>{
   
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