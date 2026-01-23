import mongoose from "mongoose";


const bookingSchema =new mongoose.Schema({
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
        
    },
    serviceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service"
       
    },
    date:{
        type:Date,
        required:[true,"please specify the date you want "]

    },
    time:{
        type:String,
        required:[true,"please specify the time you want"]
    },
    status:{
        type:String,
        enum:['pending','accepted','completed','cancelled'],
        default:'pending'
    },
    notes:{
        type:String,
        required:false
    },
    createdAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
bookingSchema.pre(/^find/,function(next){
    this.populate([
        {path:"client",select:"names email"},
        {path:"service",select:"title"}
    ])
})

const BookingService=mongoose.model("BookingService",bookingSchema)
export default BookingService