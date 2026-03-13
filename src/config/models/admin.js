const mongoose= require("mongoose");
const userSchemma=  new mongoose.Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    emailId :
    {
        type:String
    },
    phoneNo :
    {
        type:Number
    },
    age :
    {
        type : Number
    },
    gender :
    {
        type : String
    }
})

const User =mongoose.model("User" , userSchemma)
module.exports={User};