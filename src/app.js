const express = require("express");
const app=express();
require("./config/database");
const {connectDB }=require("./config/database")
const {User}= require("./config/models/user")
const {validateSignUpData}=require("./utils/validation")
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt=require("jsonwebtoken")
const {userAuth} =require("./middlewares/auth")  


// creating a post api to put data to db
// ------------------------------------------
// adding middleware to convert json into object
app.use(express.json());
app.use(cookieParser())
 
 

app.post("/signup",async(req,res)=>
{   
try{
    // validation of data
    validateSignUpData(req)
const {password ,firstName ,lastName,emailId} =req.body
    // encryption of password

    const passwordHash =  await bcrypt.hash(password,saltrounds =10);
      console.log(passwordHash )
    //creating an instance of user model

    const user =  new User( 
         {   firstName,lastName ,emailId, password : passwordHash} 
        
);

   // saving this instance to db
   await user.save();
   res.send("user added succesfully");
}
catch(err)
{
    res.status(404).send("Error : "+ err.message);
}
})


// creating login api
app.post("/login",async(req,res)=>
{
    try{
        const {emailId,password}= req.body
        console.log("before")
        const user =  await User.findOne({emailId :emailId})
        console.log("after")
        if(! user)
        {  
            throw new Error("invalid credentials")
        }
     
        const  isvalidPassword = user.validPassword(password)
        if(! isvalidPassword)
        {
            throw new Error("invalid credentials") 
        }
        if(isvalidPassword)

        {
            // create a JWT token
           const token = await user.getJWT();
           console.log("token wile sent :"+token)
            res.cookie("token",token,{expires: new Date( Date.now()+ 8 * 3600000)});
            res.send ("login Successfully")
        }

    
 
    }  
    catch(err)
    {
        res.status(404).send("error"+ err.message)
    }
})
// get profile api
app.get("/profile", userAuth , async(req,res)=>
{
    try{
        console.log("profile printed")
        const user= req.user;
        res.send(user);
    
    }
    catch(error)
    {
 res.status(404).send("ERROR" + error.message)
    }
   
})
// creating  a get api to read data from db by id
app.get("/user", async ( req,res)=>
{
    const userName = req.body.firstName;
   
try{

       const users =  await User.findOne({firstName: userName})
       if(users.length === 0)
       {
        res.status(404).send("user not found")
       }
      res.send(users)
}
catch (err){
    res.status(400).send("Something went wrong");
}
})
// creating a get api to get all the users for feed
app.get("/feed",async(req,res)=>
{
    try {
        const users=await User.find({});
        res.send(users);
  

  
    }
    catch(error)
    {
        res.status(404).send("something went wrong")
        
    }
})

// creating an api to update the user
app.patch("/user/:userId", async(req,res)=>
{
     const userId= req.params?.userId
   
    const data= req.body;


    try{
        const ALLOWED_UPDATES =[
         "photoUrl","about","age","gender","skills"
        ]
        const isUpdateAllowed = Object.keys(data).every((k)=> ALLOWED_UPDATES.includes(k))
        if(!isUpdateAllowed)
        {
            throw new Error("update failed ,some fields are not allowed to update")
        }
        const user = await User.findByIdAndUpdate({ _id :userId},data,{returnDocument:"before",runValidators:true})
        
        
        console.log(user);
        res.send("updated successfully")
    }
    catch(error)
    {
        res.status(404).send("something went wrong" + error.message)
    }
})

 




connectDB()
// managing happy case when got result
.then(()=>
{
    console.log("succesfully connected to db");
    // server is listening
    app.listen(3000,()=>

{
    console.log("server is listening");
})
})
// managing bad case
.catch((error)=>
{
    console.log("could not be connected /establised to db");
})


module.exports={app}
