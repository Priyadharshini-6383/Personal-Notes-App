import express from "express";
const router = express.Router();

import { createNotes , getNotes , updateNotes} from "../controllers/notesControllers.js";

router.post("/create" , createNotes);
router.get("/get" , getNotes);
router.put("/update" , updateNotes)



export default router;