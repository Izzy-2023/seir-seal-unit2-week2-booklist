// ***************************
// DEPENDENCIES
// ***************************
require("dotenv").config() // this is how we make use of our .env variables
require("./config/db") // bring in our db config
const express = require("express")
const morgan = require("morgan") // logger

const app = express();
const { PORT = 3013 } = process.env;


// ***************************
// MIDDLEWARE
// ***************************



// ***************************
// ROUTES
// ***************************

// Index - GET render all of the books

// New - GET for the form to create a new book

// Create - POST
app.post("/books", async (req, res) => {
    res.send("received")
})
// Show - GET rendering only one book

// ***************************
// SERVER LISTENER
// ***************************

app.listen(PORT, () => console.log(`Listening to the sounds of ${PORT}`))
