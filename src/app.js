const express = require("express");
const app=express();

// using get HTTP method
app.get("/user",(req,res)=>{
    res.send("read data successfully from the DB")
})
// using post HTTP method
app.post("/user",(req,res)=>{
    res.send(" save  data successfully to the DB")
})

// using delete HTTP method
app.delete("/user",(req,res)=>{
    res.send(" delete  data successfully from the DB")
})
// this response to all the HTTP method  API calls
app.use("/user",(req,res)=>
{
    res.send("hello from the user");
})



// server is listening
app.listen(3000,()=>

{
    console.log("server is listening");
})

