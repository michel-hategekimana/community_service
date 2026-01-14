import User from "../model/UserModel.js";

class Controller {
  signup = async (req, res) => {
    const { names, email, password, role } = req.body;

    try {
      const user = await User.create({ names, email, password, role });
      if(!user){
        return res.status(404).json({message:"user not found"})
      }else{
        res.status(201).json({message:"user successfully created",user})
      }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"failed to create a user"})
    }
  };
}
export default Controller;
