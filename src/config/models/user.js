const mongoose= require("mongoose");
const userSchemma=  new mongoose.Schema({
    firstName : {
        type: String,
         required:true,
         maxlength:15,
    },
    lastName : {
        type: String,
        maxlength:15,
    },
    emailId :
    {
        type:String,
        unique:true, 
        lowercase: true,
        trim :true,
        required:true,
       
    },
    password :
    {
        type : String,
        required :true,
        
    },
    phoneNo :
    {
        type:Number,
        min:11,
        max:11
    },
    age :
    {
        type : Number,
        min:18,

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