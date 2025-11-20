import express from "express";
const app = express();

import connectDB from "./config/db.js";    
connectDB(); 

import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth" , authRoutes);

app.use(express.json());

app.listen(3000, () => 
    console.log("Server started on port 3000"));