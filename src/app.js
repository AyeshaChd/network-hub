const express = require("express");
const app=express();
// writing a auth middleware for all admin routes
 const {adminAuth,userAuth }=require("./middlewares/auth")

 app.use("/user",(req,res)=>{
  // try{
    //logic for DB call and get data
    throw new Error("jfasjdfjajfklsd");
  // }
  // catch(err)
  // {
  //   res.status(500).send("some technical issue contact tech team");
  // }
 })
 // wildcard error handling

 app.use("/",(err,req,res,next)=>
 {
if(err)
{
  // log ur error
  res.status(401).send("something went wrong");
}
 })





// server is listening
app.listen(3000,()=>

{
    console.log("server is listening");
})
module.exports={app}
