// ***************************
// DEPENDENCIES
// ***************************
require("dotenv").config() // this is how we make use of our .env variables
require("./config/db") // bring in our db config
const express = require("express")
const morgan = require("morgan") // logger
const methodOverride = require("method-override")
const bookRouter = require("./routes/books")

const app = express();
const { PORT = 3013 } = process.env;
const seedData = require("./models/seed")

// Bring in our model
const Book = require("./models/Book")


// ***************************
// MIDDLEWARE
// ***************************
app.use((req, res, next) => {
    req.model = {
        Book, 
        seedData
    }
        console.log("this is middleware")
        // go to the next app method
        next()
    })

app.use(morgan("dev")) // logging
app.use(express.urlencoded({ extended: true })) // body parser, this is how we get access to req.body
app.use(methodOverride("_method")) // lets us use DELETE PUT HTTP verbs
app.use("/public", express.static("public")) // server up our public directory 

// *************************
// Routes
// *************************

// app.use(prefix url, router to execute)
app.use("/books", bookRouter)

// ***************************
// SERVER LISTENER
// ***************************

app.listen(PORT, () => console.log(`Listening to the sounds of ${PORT}`))

