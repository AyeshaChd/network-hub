const  validator = require("validator")

const validateSignUpData =(req)=>
{
const{firstName , lastName , password, emailId} = req.body;
if( !firstName || !lastName){
    throw new Error("Name is not valid!")
}
else if(firstName.length < 4 || firstName.length > 50){
    throw new Error ("first name should be between 4 and 50 characters");
}
else if(lastName.length < 4 || lastName.length > 50){
    throw new Error ("first name should be between 4 and 50 characters");
}
else if(! validator.isEmail(emailId))
        {throw new Error("email is not vvvvvvvalid!")}
    
else if(! validator.isStrongPassword(password))
{
   throw new Error("password is not strong!")
    
}


}

module.exports = { validateSignUpData
}