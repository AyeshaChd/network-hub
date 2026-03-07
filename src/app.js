const express = require("express");
const app=express();
// server responsing to request
// app.use("/hello/2",(req,res)=>
// {
//     res.send("lets start /hello/2");
// })
// app.use("/hello",(req,res)=>
// {
//     res.send("lets start node hello");
// })

app.use("/hello",(req,res)=>
{
    res.send("lets start/hello123");
})
app.use("/",(req,res)=>
{
    res.send("lets start slash");
})


// server is listening
app.listen(3000,()=>

{
    console.log("server is listening");
})

