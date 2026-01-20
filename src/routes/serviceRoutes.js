import express from "express"
import ServiceController from "../controller/serviceController.js"
import { VerifyAcces } from "../midleware/verifyAccess.js"

const router = express.Router()

router.post("/create",VerifyAcces("provider"),ServiceController.createService)

export default router