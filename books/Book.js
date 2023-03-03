const mongoose = require("mongoose");

//When we define model using mongoose using mongoose, we define the structure of a collection of mongoDB
//Defining a model:
// We provide parameters to .model, name of model and definition of model
//in definition of model we give attributes & fields of our books collection

mongoose.model("ABook", {
    //Title, author, numberPages, publisher

    title: {
        type: String, 
        require: true
    },
    author: {
        type: String,
        require: true
    },
    numberPages: {
        type: Number,
        require: false
    }
});