
 
 const adminAuth = (req,res,next)=>
{
    const token= "abc";
    const isTokenChecked= token ==="abc";
    if(isTokenChecked) next();
    else res.status(401).send("user  is not athuenticated");

}
 
 const userAuth = (req,res,next)=>
{
    const token= "123";
    const isTokenChecked= token ==="abc";
    if(isTokenChecked) next();
    else res.status(401).send("user  is not athuenticated");

}

const amina="abc";
module.exports={userAuth,adminAuth}