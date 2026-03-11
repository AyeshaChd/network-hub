const express = require("express");
const app=express();
// writing a auth middleware for all admin routes
 const {adminAuth,userAuth }=require("./middlewares/auth")
console.log("file executetd");

app.use("/admin", adminAuth);
app.get("/admin/getAllData", (req,res,)=>
{
  console.log(" get all data api is executed");
  res.send("all data is sent succsessfully");
})
app.get("/admin/deleteuser",(req,res,)=>
{
 console.log(" delete user api is executed");
  res.send("user id deleted");

})
app.use("/user",userAuth,(req,res,)=>
{
  console.log(" print from handler 1");
   res.send("user has logged in");

})





// server is listening
app.listen(3000,()=>

{
    console.log("server is listening");
})
module.exports={app}
