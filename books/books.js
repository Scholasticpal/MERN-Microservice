//Load express
    const express = require("express")//import express
    const app = express(); //create express app instance
    const bodyParser = require("body-parser"); //import body-parser

    app.use(bodyParser.json()); //use body-parser as a middleware

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
app.post('/book', (req,res)=>{
    console.log(req.body); //console log the data received from postman
    res.send("Tesing our book route");
})

//open express server
app.listen(4545, () => {
    console.log("Server is up and running on port 4545");
});