import express from "express"
import Controller from "../controller/UserController.js"


const router = express.Router()

const controller = new Controller(); 
router.post("/user", controller.signup);


export default router