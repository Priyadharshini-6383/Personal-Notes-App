import express from "express";

import Note from "../models/Notes.js";


export const createNote = async (req , res) =>{
     const {title , content , user} = req.body;

     try {
        const note = new Note({title , content , user});
        await note.save();
        res.status(201).json("Note Created Successfully");
     }
     catch (error) {
        console.error("Error Found" , error.message);
     }
}