const express = require("express");
const app=express();
require("./config/database");
const {connectDB }=require("./config/database")
const {User}= require("./config/models/admin")

// creating a post api to put data to db
app.post("/signup",async(req,res)=>
{
    //creating an instance of user model
const user = new User({
    firstName:"Ayesha",
    lastName:"kanwal",
    emailId:"ayeshakanwal@gmail.com",
    phoneNo:"21324324"
})

try{
// saving this instance to db
user.save();
res.send("user added succesfully");
}
catch(err)
{
    res.status(404).send("Error while saving the user"+ err.message);
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
