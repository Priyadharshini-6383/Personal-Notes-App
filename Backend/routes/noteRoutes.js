import express from "express";
const router = express.Router();
import middleware from "../middlewares/authMiddleware.js";

import { createNotes , getNotes , updateNotes , deleteNotes} from "../controllers/notesControllers.js";

router.post("/create" , middleware, createNotes);
router.get("/get" , middleware, getNotes);
router.put("/update/:id" , middleware , updateNotes);
router.delete("/delete/:id" , middleware , deleteNotes);



export default router;