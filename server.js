// ***************************
// DEPENDENCIES
// ***************************
require("dotenv").config() // this is how we make use of our .env variables
require("./config/db") // bring in our db config
const express = require("express")
const morgan = require("morgan") // logger

const app = express();
const { PORT = 3013 } = process.env;

// Bring in our model
const Book = require("./models/Book")


// ***************************
// MIDDLEWARE
// ***************************
app.use(morgan("dev")) // logging
app.use(express.urlencoded({ extended: true })) // body parser, this is how we get access to req.body

// ***************************
// ROUTES
// ***************************

// Index - GET render all of the books

// New - GET for the form to create a new book
app.get('/books/new', (req, res) => {
	res.render('new.ejs');
});

// Create - POST
app.post("/books", async (req, res) => {
	try {
    if (req.body.completed === "on") {
        // if checked
        req.body.completed = true
    } else {
        // if not checked
        req.body.completed = false
    }

    let newBook = await Book.create(req.body)
    res.send(newBook)
} catch (err) {
	res.send(err)
}
})



// Show - GET rendering only one book

// ***************************
// SERVER LISTENER
// ***************************

app.listen(PORT, () => console.log(`Listening to the sounds of ${PORT}`))
