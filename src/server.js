import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./routes/UserRoutes.js"
import bodyParser from "body-parser"

dotenv.config()
const db=process.env.DATABASE


const app= express()
app.use(bodyParser.json())
app.use("/api/v1",router)

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

mongoose.connect(db).then(()=>{console.log("Database connected successfully")})
.catch((error)=>{console.log(`Error is ${error}`)})
