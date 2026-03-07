const express = require("express");
const app=express();

// using get HTTP method
app.get("/user/:userId", (req, res) => {
  console.log(req.params);
    res.send("This matches both /abc and /ac");
});
// app.use("/abc", (req, res) => {
//     res.send("This matches ");
// });





// server is listening
app.listen(3000,()=>

{
    console.log("server is listening");
})

