import express from "express";
const router = express.Router();

import { createNote } from "../controllers/notesControllers.js";

router.post("/create" , createNote);



export default router;