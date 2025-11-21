import express from "express";
const router = express.Router();

import { createNote , getNotes} from "../controllers/notesControllers.js";

router.post("/create" , createNote);
router.get("/get" , getNotes);



export default router;