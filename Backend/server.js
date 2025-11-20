import express from "express";
const app = express();
import authRoutes from "./routes/authRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";    
connectDB(); 

import dotenv from "dotenv";
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/auth" , authRoutes);
app.use("/api/auth" , authRoutes);



app.listen(3000, () => 
    console.log("Server started on port 3000"));