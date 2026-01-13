import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
const db=process.env.DATABASE


const app= express()

const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

mongoose.connect(db).then(()=>{console.log("Database connected successfully")})
.catch((error)=>{console.log(`Error is ${error}`)})
