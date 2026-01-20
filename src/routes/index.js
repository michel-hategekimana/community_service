
import express from "express"
import UserRoutes from "./UserRoutes.js"
import categoryRoutes from "./categoryRoutes.js"
import serviRoutes from "./serviceRoutes.js"


 const router=express.Router()
 router.use("/user",UserRoutes)
 router.use("/category",categoryRoutes)
 router.use("/service",serviRoutes)

 

 export default router