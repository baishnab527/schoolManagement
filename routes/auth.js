import express from "express";
import { loginStudent, logoutStudent } from "../controllers/authController.js";

// init express router ;
const router = express.Router();
router.post("/login" , loginStudent);
router.get("/logout" , logoutStudent);

// export default router;
export default router;