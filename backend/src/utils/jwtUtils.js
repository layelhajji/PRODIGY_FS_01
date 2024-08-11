//generate token
const jwt=require('jsonwebtoken');
const secretkey=require("../config/jwtconfig");
 



function generateToken(user){
    const payload={
        id:user._id,
        email:user.email,
    }

    return jwt.sign(payload,secretkey);

};
module.exports={generateToken};