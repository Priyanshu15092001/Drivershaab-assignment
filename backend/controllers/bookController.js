const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
}; 
 
exports.createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book); 
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

exports.deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json({ message: "Book deleted" });
};
