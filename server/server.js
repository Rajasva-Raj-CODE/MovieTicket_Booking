import express from "express"
import 'dotenv/config'
import cors from "cors"
import connectDB from "./configs/db.js"
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./Inngest/index.js"

const app = express()
await connectDB()

// middlewares
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())






//API Routes
app.use('/',(req,res)=>{
    res.send("API is running")
})
app.use("/api/inngest", serve({ client: inngest, functions }));




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})