// *************************
// DEPENDENCIES
// *************************

const mongoose = require("mongoose")

// Create our schema
const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	completed: Boolean,
});

// Compose our model from the schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
