import express from "express";
const router = express.Router();

import { createNotes , getNotes , updateNotes} from "../controllers/notesControllers.js";

router.post("/create" , createNotes);
router.get("/get" , getNotes);
router.put("/update/:id" , updateNotes)



export default router;