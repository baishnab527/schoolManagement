import express from "express";
import {createBook, getAllBook, getSingleBook, deleteBook, updateBook} from "../controllers/bookController.js";

// init express router
const router = express.Router();

router.post("/api/v1/book", createBook);
router.get("/api/v1/book", getAllBook);
router.get("/api/v1/book/:id", getSingleBook);
router.delete("/api/v1/book/:id", deleteBook);
router.patch("/api/v1/book/:id", updateBook);

// export default router
export default router;