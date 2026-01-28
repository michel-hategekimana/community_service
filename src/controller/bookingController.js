import BookingService from "../model/bookingModel.js"
import ServiceBooking from "../model/serviceModel.js";




class BookingController{
    static booking=async(req,res)=>{
        const {serviceId,date,time,status,notes}=req.body
        const service=await ServiceBooking.findById(serviceId)
        if(!service){
           return res.status(404).json({message:"service not found"})
        }else{
            const userId=req.user?._id
            if(!userId){
                return res.status(404).json({message:"please login first"})
            }else{
                let bookingService=await BookingService.create({
                    serviceId,
                    clientId:userId,
                    date,
                    time,
                    status,
                    notes

                })
                bookingService= await bookingService.populate([
                    {path:"clientId",select:"names email"},
                    {path:"serviceId",select:"title"}
                ])
                return res.status(200).json({message:"service booked successfully",bookingService})
            }
        }
    };

    static findAllBookedServices=async(req,res)=>{
        const bookedServices= await ServiceBooking.find()
        if(!bookedServices){
            res.status(404).json({message:"bookedservices not found"})
        }else{
            return res.status(200).json({message:"all bookedservices find successful",bookedServices})
        }
    };

    static changeStatus=async(req,res)=>{
        const id =req.params.id
        if(!id){
            res.status(404).json({message:`booking id not matched ${id}`})
        }else{
            const booking=await BookingService.findByIdAndUpdate(id,req.body,{new:true})
            return res.status(201).json({message:"status successfully updated",booking})
        }
    }

}
export default BookingController