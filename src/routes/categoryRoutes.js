import express from "express"
import CategoryController from "../controller/categoryController.js"

const router=express.Router()
router.post("/create",CategoryController.CreateCategory)
router.get("/categories",CategoryController.GetAllCategories)

export default router