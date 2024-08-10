const bcrypt =require("bcrypt");
const User=require("../models/user")
const {generateToken}=require("../utils/jwtUtils")


async function login(email, password) {
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            console.log("User not found with email:", email);
            throw new Error("User not found");
        }

        console.log("User found:", existingUser);

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        console.log("Is password valid:", isPasswordValid);

        if (!isPasswordValid) {
            throw new Error("Incorrect password");
        }

        const token = generateToken(existingUser);
        console.log("token : ",token)
        return token;
    } catch (error) {
        console.log("Error during login:", error.message);
        throw new Error("Invalid credentials");
    }
}
module.exports={login}