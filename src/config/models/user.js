const mongoose= require("mongoose");
const userSchemma=  new mongoose.Schema({
    firstName : {
        type: String,
         required:true,
    },
    lastName : {
        type: String
    },
    emailId :
    {
        type:String,
        unique:true, 
        lowercase: true,
       
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
        type : String,
        validate(value)
        {
            if( !["male","female","others"].includes(value))
            {
                throw new Error ("gender is not valid");
            }
        }
    },
    about :{
      type: String,
      default : "this is the default of about",
    },
    skills :
    {
        type : [String],
    }
},{
    timestamps:true,
})

const User =mongoose.model("User" , userSchemma)
module.exports={User};