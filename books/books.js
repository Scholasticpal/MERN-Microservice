//Load express
    const express = require("express")//import express
    const app = express(); //create express app instance
//Load Mongoose
    const mongoose = require("mongoose");//import mongoose

    //Connect
    // mongoose.connect("mongodb+srv://anmol:123456MERN@booksmicroservices.1h9wgv5.mongodb.net/?retryWrites=true&w=majority");

mongoose
 .connect("mongodb+srv://anmol:123456MERN@booksmicroservices.1h9wgv5.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then((db) => console.log("db is connected"))
 .catch((err) => console.log(err));
app.get('/', (req, res) => { //Main route of books application
    res.send("This is our main endpoint");
});

//Create Books Functionality
app.post('/books', (req,res)=>{
    //This is create books functionality
})

//open express server
app.listen(4545, () => {
    console.log("Server is up and running on port 4545");
});