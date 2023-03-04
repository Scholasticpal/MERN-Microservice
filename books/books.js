//Load express
const express = require("express")//import express
const app = express(); //create express app instance
const bodyParser = require("body-parser"); //import body-parser

app.use(bodyParser.json()); //use body-parser as a middleware

//Load Mongoose
const mongoose = require("mongoose");//import mongoose

//Loading the model
require("./Book")
const Book = mongoose.model("Book")

//Connect
// mongoose.connect("mongodb+srv://escholaMars:2323orange@booksmernservice.lrc7cv0.mongodb.net/?retryWrites=true&w=majority");

mongoose
.connect("mongodb+srv://user0:abcdefg@booksservice.sdldbm1.mongodb.net/?retryWrites=true&w=majority", {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then((db) => console.log("db is connected"))
.catch((err) => console.log(err));
app.get('/', (req, res) => { //Main route of books application
res.send("This is our main endpoint");
});

//Create Books Functionality
app.post('/book', (req,res)=>{
var newBook = {
    title : req.body.title,
    author : req.body.author,
    numberPages : req.body.numberPages,
    publisher : req.body.publisher
}

//Create a new book
var book = new Book(newBook);

book.save().then(()=>{
    console.log("New Book Created");
}).catch((err)=>{
    if (err){
        throw err;
    }
})

res.send("A new book has been created successfully");//to close request on postman
})

//List all the books in the DB
app.get("/books", (req, res)=>{

    Book.find().then((books)=>{
        res.json(books)
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
})

//List a single book by its id
app.get("/book/:id", (req, res)=>{
    // res.send(req.params.id)

    Book.findById(req.params.id).then((book)=>{
        
        if(book){
            //if user passes a valid id ,i.e., book exits, then return data of that book in json format
            res.json(book);
        }
        else{
            //if user passes an invalid id, i.e., book does not exist, then return 404 error
            res.sendStatus(404);
        }
    }).catch(err=>{
        if(err){
            throw err;
        }
    })
})

//Delete a book by its id
app.delete("/book/:id", (req, res)=>{

    Book.findByIdAndRemove(req.params.id).then(()=>{
        res.send("Book Deleted Successfully");
    }).catch(err=>{
        if(err){
            throw err;
        }
    })
})

//open express server
app.listen(4545, () => {
console.log("Server is up and running on port 4545");
});