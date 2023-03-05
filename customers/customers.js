const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Connect to database
mongoose
.connect("mongodb+srv://user12:abcdefg@customersservice.gzd1qao.mongodb.net/?retryWrites=true&w=majority")
.then((db) => console.log("CustomersService db is connected"))
.catch((err)=> console.log(err));

//Load the model
require("./Customer")
const Customer = mongoose.model("Customer"); 

// A customer will have:
// 1. Name
// 2. Age
// 3. Address

app.listen("5555", ()=>{
    console.log("Server is running on port 5555 - Customer's Service");
})