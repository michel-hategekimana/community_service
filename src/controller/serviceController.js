
import Category from "../model/categoryModel.js"
import Service from "../model/serviceModel.js"


class ServiceController{
    static createService=async(req,res)=>{
        try {
            const {title,description,categorys,price}=req.body
            const category=await Category.findById(categorys)
             if(!category){
            return res.status(404).json({message:"category not found"})
        }
            const userId=req.user?._id
            if(!userId){
                return res.status(401).json({message:"user not found"})
            }
              const newService=await Service.findOne({title})
              if(newService){
                return res.status(403).json({message:"service already exist"})
              }

                let service= await Service.create({
                    title,
                    description,
                    categorys,
                    price,
            
                    provider:userId

                })
                  service=await service.populate([
                        {path:"categorys",select:"categoryName"},
                        {path:"provider",select:"names email"}
                    ])
                    return res.status(201).json({message:"service created successfull",service})
                

        } catch (error) {
            return res.status(500).json({message:error.message})
            
        }
            };

            static getAllServices=async(req,res)=>{
                const services= await Service.find()
                if(!services){
                    return res.status(404).json({message:"services not found"})
                }else{
                    return res.status(200).json({message:"services found successfully",services})
                }

            };

            static getOneservice=async(req,res)=>{
                const id=req.params.id
                const service=await Service.findById(id)
                if(!service){
                    return res.status(404).json({message:"service not found"})
                }else{
                    return res.status(200).json({message:"service found",service})
                }

            };

            static deleteOneService=async(req,res)=>{
                const id = req.params.id
                const service=await Service.findByIdAndDelete(id)
                 if(!service){
                    return res.status(404).json({message:"service not found"})
                }else{
                    return res.status(200).json({message:"service deleted"})
                }

            };

            static updateService=async(req,res)=>{
                const id = req.params.id
                const service=await Service.findByIdAndUpdate(id,req.body,{new:true})
                  if(!service){
                    return res.status(404).json({message:"service not found"})
                }else{
                    return res.status(200).json({message:"service updated",service})
                }


            };

            static deleteAllServices=async(req,res)=>{
                const services=await Service.deleteMany()
                 if(!services){
                    return res.status(404).json({message:"service not found"})
                }else{
                    return res.status(200).json({message:"all services deleted",services})
                }

            }
        }

        
    

export default ServiceController


