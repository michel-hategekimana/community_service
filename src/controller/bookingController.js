import BookingService from "../model/bookingModel.js"
import Service from "../model/serviceModel.js"



class BookingController{
    static booking=async(req,res)=>{
        const {serviceId,date,time,status,notes}=req.body
        const service=await Service.findById(serviceId)
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
    }

}
export default BookingController