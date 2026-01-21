import Category from "../model/categoryModel.js"



class CategoryController{
  static CreateCategory=async(req,res)=>{
        const category=await Category.create(req.body)
        if(!category){
            return res.status(404).json({message:"category not created"})
        }else{
            return res.status(201).json({message:"category created",category})
        }

    };

    static GetAllCategories=async(req,res)=>{
        const categories=await Category.find()
        if(!categories){
            return res.status(404).json({message:"categories not found"})
        }else{
            return res.status(200).json({message:"categories found successfully",categories})
        }
    };

    static getOneCategory=async(req,res)=>{
        const {id}=req.params.id
        const category=await Category.findById(id)
        if(!category){
            return res.status(404).json({message:"category not found"})

        }else{
            return res.status(200).json({message:"category found",category})
        }

    };

    static deleteOneCategory=async(req,res)=>{
        const {id}=req.params.id
        const category=await Category.findByIdAndDelete(id)
         if(!category){
            return res.status(404).json({message:"category not found"})

        }else{
            return res.status(200).json({message:"category deleted",category})
        }

    };

    static updateCategory=async(req,res)=>{
        const id =req.params.id
        const category =await Category.findByIdAndUpdate(id,req.body,{new:true})
         if(!category){
            return res.status(404).json({message:"category not found"})

        }else{
            return res.status(200).json({message:"category updated",category})
        }

    };

    static deleteAllCategories=async(req,res)=>{
        const categories=await Category.deleteMany()
        if(!categories){
            return res.status(404).json({message:"categories not found"})

        }else{
            return res.status(200).json({message:"categories deleted",categories})
        }

    }


}
export default CategoryController