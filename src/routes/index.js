
import express from "express"
import UserRoutes from "./UserRoutes.js"
import categoryRoutes from "./categoryRoutes.js"
import serviRoutes from "./serviceRoutes.js"
import bookingRouter from "./bookingRouter.js"
import dotenv from "dotenv"


dotenv.config()

 const router=express.Router()
 router.use("/user",UserRoutes)
 router.use("/category",categoryRoutes)
 router.use("/service",serviRoutes)
 router.use("/booking",bookingRouter)

 

 export default router