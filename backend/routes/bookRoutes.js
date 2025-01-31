const express = require("express");
const { protect } = require("../middleware/authMiddleware.js");
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require("../controllers/bookController");
const router = express.Router();

router.get("/", protect, getAllBooks);
router.get("/:id", protect, getBookById);
router.post("/", protect, createBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

module.exports = router; 