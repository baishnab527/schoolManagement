import express from "express";
import { createTeam, getAllTeam, getSingleTeam, deleteTeam, updateTeam } from "../controllers/teamController.js";

// init express router
const router = express.Router();

router.post("/api/vi/team", createTeam);
router.get("/api/vi/team", getAllTeam);
router.get("/api/vi/team/:id", getSingleTeam);
router.delete("/api/vi/team/:id", deleteTeam);
router.delete("/api/vi/team/:id", updateTeam);

// export default router;
export default router;