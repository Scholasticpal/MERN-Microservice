/*
CustomerID <-- //Holds CustomerID
BookID <-- //Tells which book customer interact with in library
InitialDate <-- //Date when customer issued the book from library
DeliveryDate <-- //Date when customer returned the book to the library
*/

const mongoose = require("mongoose");

mongoose.model("Order", {
    CustomerID:{
        type: mongoose.SchemaTypes.ObjectId, //This sort of type holds mongoDB Ids
        require: true
    },
    BookID: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    InitialDate:{
        type: Date,
        require: true
    },
    DeliveryDate:{
        type: Date,
        require: true
    }
})
