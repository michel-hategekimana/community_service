import express from "express"
import BookingController from "../controller/bookingController.js"
import { VerifyAcces } from "../midleware/verifyAccess.js"

const router=express.Router()

router.post("/book",VerifyAcces("client"),BookingController.booking)


export default router