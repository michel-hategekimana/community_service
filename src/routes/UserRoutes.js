import express from "express"
import Controller from "../controller/UserController.js"
import { EmailExist } from "../midleware/validation.js";
import { VerifyAcces } from "../midleware/verifyAccess.js";
import { routeBodyValidation } from "../midleware/requestMidelware.js";
import { signInSchema, signUpschema } from "../validation/validation.js";


const router = express.Router()

const controller = new Controller(); 
router.post("/signup",routeBodyValidation(signUpschema),EmailExist ,controller.signup);
router.post("/login",routeBodyValidation(signInSchema),controller.login)
router.get("/users",VerifyAcces(["admin"]),controller.getAllUsers)
router.get("/:id",VerifyAcces(["admin"]),controller.findOneUser)
router.delete("/:id",VerifyAcces(["admin"]),controller.deleteOneUser)
router.delete("/users",VerifyAcces(["admin"]),controller.deleteAllUsers)
router.patch("/:id",VerifyAcces(["admin"]),controller.updateUser)

export default router