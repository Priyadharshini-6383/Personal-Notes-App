import express from "express";
const app = express();
import bodyParser from "body-parser";
import connectDB from "./config/db.js";    
connectDB(); 

import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth" , authRoutes);



app.listen(3000, () => 
    console.log("Server started on port 3000"));