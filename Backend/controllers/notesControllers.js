import express from "express";

import Note from "../models/Notes.js";


export const getNotes = async (req , res) =>{
   const {user , title, content} = req.body;

   try {
      const note = await Note.find();
res.status(201).json({note})
   }
   catch (error) {
      console.error("Error Found" , error.message);
   }
}


export const createNotes = async (req , res) =>{
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

export const updateNotes = async (req,res) => {
   const {title , content } = req.body;

   try {
      const note = await Note.findByIdAndUpdate(req.params.id, {title , content} );
      if(!note) {
         return res.status(404).json({message : "Note not found"});
      }
      await note.save();
      
      res.status(200).json({message : "Note Updated Successfully" });
   } catch (error) {
      console.error("Error Found" , error.message);
   }
}