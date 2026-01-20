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
    }


}
export default CategoryController