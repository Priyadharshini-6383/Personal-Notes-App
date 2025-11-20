import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const database = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected Successfully");
    } catch(error) {
        console.error("Error Found" , error.message);

    }
}

export default connectDB;