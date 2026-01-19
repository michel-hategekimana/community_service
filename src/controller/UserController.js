import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

class Controller {
  signup = async (req, res) => {
    const { names, email, password, role } = req.body;
    const hashPassword = bcrypt.hashSync(req.body.password, 10);

    try {
      const user = await User.create({
        names,
        email,
        password: hashPassword,
        role,
      });
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      } else {
        res.status(201).json({ message: "user successfully created", user });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "failed to create a user" });
    }
  };

  
  login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email})
    if(!user){
      return res.status(404).json({message:"Invalid email "})
    }else{
      const comparePasword = bcrypt.compareSync(password,user.password)
      if(!comparePasword){
        return res.status(404).json({message:"Invalid password"})
      }else{
        const token = jwt.sign({user:user},process.env.SECRET_KEY,{expiresIn:"1d"})
        return res.status(201).json({message:"Login successfully",token})
      }
    }
  };

  getAllUsers = async(req,res)=>{
    
    const users= await User.find()
    if(!users){
      return res.status(404).json({message:"users not found"})
    }else{
      return res.status(200).json({message:"users found successfully",users})
    }

  };

  findOneUser= async(req,res)=>{
    const id=req.params.id
    const user= await User.findById(id)
    if(!user){
      return res.status(404).json({message:"user not found"})
    }else{
      return res.status(200).json({message:"user found sucessfully",user})
    }

  };

  deleteOneUser=async(req,res)=>{
    const id =req.params.id
    const user =await User.findByIdAndDelete(id)
    if(!user){
      return res.status(404).json({message:"user not found"})
    }else{
      return res.status(200).json({message:"user deleted successfully"})
    }

  };

  deleteAllUsers=async(req,res)=>{
    const users= await User.deleteMany()
    if(!users){
      return res.status(404).json({message:"users not found"})
    }else{
      return res.status(200).json({message:"all users deleted successfully",users})
    }

  }; 
  updateUser=async(req,res)=>{
    const id=req.params.id
    const user= await User.findByIdAndUpdate(id,req.body,{new:true})
    if(!user){
      res.status(404).json({message:"user not found"})
    }else{
      res.status(201).json({message:"updated successful",user})
    }

  }
}
export default Controller;
