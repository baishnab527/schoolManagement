import express from "express";
import { StudentMulter } from "../utils/multer.js";
import { createStudent, getAllStudent, getSingleStudent, deleteStudent, updateStudent } from "../controllers/studentController.js";
import { verifyToken } from "../middleware/veryfyToken.js";

// init express router
const router = express.Router();
router.use(verifyToken);

router.post("/", StudentMulter, createStudent);
router.get("/", getAllStudent);
router.get("/:id", getSingleStudent);
router.delete("/:id", deleteStudent);
router.patch("/:id", StudentMulter, updateStudent); 

// export default router
export default router;