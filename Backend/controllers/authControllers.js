import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async (req , res) => {
    const {user , email , password} = req.body;

    try {
    const user = await User.findOne({email});
    if (user) {
        return res.status(400).json({ message : "User already exist"});
    }

    const hassedPassword = await bcrypt.hash(password , 10);
    const newUser = new User({user , email, password : hassedPassword});
    await newUser.save();

    } catch (error) {
        console.error("Error Found" , error.message);
    }
}