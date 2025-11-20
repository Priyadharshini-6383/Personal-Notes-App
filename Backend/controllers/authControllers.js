import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


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

export const login = async (req , res) => {
    const {email , password} = req.body;

    try {
        const user = await User.findOne({email});
        if (!user) {
            res.status(404).json({message : "User not found"});
        }

        const passwordMatch = await bcrypt.compare(password , user.password);
        if(!passwordMatch) {
            res.status(401).json({message : "Invalid Password"});
        }

        const token = jwt.sign({id : user.id} , process.env.JWT_SECRET , {expiresIn : "2d"});
        res.status(200).json({token});
    }
      catch (error) {
        console.error("Error Found"  , error.message);
      }
 }