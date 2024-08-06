const bcrypt =require("bcrypt");
const User=require("../models/user")
const {generateToken}=require("../utils/jwtUtils")


async function  login(email,password) {
    try {
        const existingUser=await User.findOne({email})
        if(!existingUser){
            throw new Error("user not found");
        }
        const ispasswordValid=bcrypt.compare(password,existingUser.password)
        if(!ispasswordValid){
            throw new Error("Incorrect password");
        }
        const token=generateToken(existingUser)
        return token;

    } catch (error) {
        console.log(error.message)
        throw new Error("invalid credentials ")
        
    }
}
module.exports={login}