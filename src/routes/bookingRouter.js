import express from "express"
import BookingController from "../controller/bookingController.js"
import { VerifyAcces } from "../midleware/verifyAccess.js"

const router=express.Router()

router.post("/book",VerifyAcces("client"),BookingController.booking)
router.get("/all",VerifyAcces("provider"),BookingController.findAllBookedServices)
router.put("/status/:id",VerifyAcces("provider"),BookingController.changeStatus)


export default router