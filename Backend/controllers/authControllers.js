import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req , res) => {
    const {name , email , password} = req.body;

    try {
    const user = await User.findOne({email});
    if (user) {
        return res.status(400).json({ message : "User already exist"});
    }

    const hassedPassword = await bcrypt.hash(password , 10);
    const newUser = new User({name , email, password : hassedPassword});
    await newUser.save();

    } catch (error) {
        console.error("Error Found" , error.message);
    }
}