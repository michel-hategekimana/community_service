import User from "../model/UserModel.js"



export const EmailExist=async(req,res,next)=>{
    const {email}=req.body
    const user= await User.findOne({email})
    if(user){
       return res.status(403).json({message:"User already exist"})
    }else{
        return next()
    }

}
