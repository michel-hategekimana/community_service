import express from "express"
import Controller from "../controller/UserController.js"
import { EmailExist } from "../midleware/validation.js";
import { VerifyAcces } from "../midleware/verifyAccess.js";


const router = express.Router()

const controller = new Controller(); 
router.post("/user",EmailExist ,controller.signup);
router.post("/user/login",controller.login)
router.get("/users",VerifyAcces("admin"),controller.getAllUsers)
router.get("/user/:id",controller.findOneUser)
router.delete("/user/:id",controller.deleteOneUser)
router.delete("/users",controller.deleteAllUsers)
router.patch("/user/:id",controller.updateUser)

export default router