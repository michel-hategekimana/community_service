import express from "express"
import ServiceController from "../controller/serviceController.js"
import { VerifyAcces } from "../midleware/verifyAccess.js"

const router = express.Router()

router.post("/create",VerifyAcces(["provider","admin"]),ServiceController.createService)
router.get("/all",ServiceController.getAllServices)
router.get("/:id",ServiceController.getOneservice)
router.delete("/:id",ServiceController.deleteOneService)
router.patch("/:id",ServiceController.updateService)
router.delete("/",ServiceController.deleteAllServices)

export default router