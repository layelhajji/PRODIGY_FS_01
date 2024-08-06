const userServices=require('../services/signup')


async function createUser(req,res) {
   try {
    const userData=req.body;
    const user=await userServices.CreateUser(userData);
    res.status(201).json({User:user,message:"User created successfuly"})
    
   } catch (error) {
    console.log(error)
    res.status(400).json({message:error.message})
   }
}
module.exports={createUser}