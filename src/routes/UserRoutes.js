import express from "express"
import Controller from "../controller/UserController.js"
import { EmailExist } from "../midleware/validation.js";
import { VerifyAcces } from "../midleware/verifyAccess.js";


const router = express.Router()

const controller = new Controller(); 
router.post("/signup",EmailExist ,controller.signup);
router.post("/login",controller.login)
router.get("/users",VerifyAcces("admin"),controller.getAllUsers)
router.get("/:id",controller.findOneUser)
router.delete("/:id",controller.deleteOneUser)
router.delete("/users",controller.deleteAllUsers)
router.patch("/:id",controller.updateUser)

export default router