import express from "express";
const router = express.Router();

import { createNotes , getNotes , updateNotes , deleteNotes} from "../controllers/notesControllers.js";

router.post("/create" , createNotes);
router.get("/get" , getNotes);
router.put("/update/:id" , updateNotes);
router.delete("/delete/:id" , deleteNotes);



export default router;