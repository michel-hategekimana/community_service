import express from "express"
import CategoryController from "../controller/categoryController.js"
import { VerifyAcces } from "../midleware/verifyAccess.js"
import { routeBodyValidation } from "../midleware/requestMidelware.js"
import { createCategorySchema } from "../validation/validation.js"


const router=express.Router()
router.post("/create",routeBodyValidation(createCategorySchema),VerifyAcces(["provider","admin"]),CategoryController.CreateCategory)
router.get("/categories",CategoryController.GetAllCategories)
router.get("/:id",CategoryController.getOneCategory)
router.delete("/:id",VerifyAcces(["provider","admin"]),CategoryController.deleteOneCategory)
router.patch("/:id",VerifyAcces(["provider","admin"]),CategoryController.updateCategory)
router.delete("/categories/delete",VerifyAcces(["provider","admin"]),CategoryController.deleteAllCategories)

export default router