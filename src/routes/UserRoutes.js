import express from "express"
import Controller from "../controller/UserController.js"
import { EmailExist } from "../midleware/validation.js";


const router = express.Router()

const controller = new Controller(); 
router.post("/user",EmailExist ,controller.signup);
router.post("/user/login",controller.login)
router.get("/users",controller.getAllUsers)
router.get("/user/:id",controller.findOneUser)
router.delete("/user/:id",controller.deleteOneUser)
router.delete("/users",controller.deleteAllUsers)

export default router