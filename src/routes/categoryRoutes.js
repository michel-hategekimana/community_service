import express from "express"
import CategoryController from "../controller/categoryController.js"
import { VerifyAcces } from "../midleware/verifyAccess.js"


const router=express.Router()
router.post("/create",VerifyAcces("provider"),CategoryController.CreateCategory)
router.get("/categories",CategoryController.GetAllCategories)
router.get("/:id",CategoryController.getOneCategory)
router.delete("/:id",VerifyAcces("provider"),CategoryController.deleteOneCategory)
router.patch("/:id",CategoryController.updateCategory)
router.delete("/categories/delete",VerifyAcces("provider"),CategoryController.deleteAllCategories)

export default router