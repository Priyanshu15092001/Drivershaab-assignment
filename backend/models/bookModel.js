const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Book", BookSchema);
