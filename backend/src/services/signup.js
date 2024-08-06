const User=require('../models/user')
const bcrypt=require('bcrypt')


async function CreateUser(userData) {
    const {firstName,lastName,email,password}=userData;
    const hashedPassword= await bcrypt.hash(password,10);
    const createdUser=new User({
        firstName,
        lastName,
        email,
        password:hashedPassword

    });
    const savedUser= await createdUser.save();
    return savedUser ;
   
}
module.exports={CreateUser};