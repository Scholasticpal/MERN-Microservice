const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Connect to database
mongoose
.connect("mongodb+srv://user12:abcdefg@customersservice.gzd1qao.mongodb.net/?retryWrites=true&w=majority")
.then((db) => console.log("CustomersService db is connected"))
.catch((err)=> console.log(err));

//Load the model
require("./Customer")
const Customer = mongoose.model("Customer"); 

app.post("/customer", (req, res)=>{

    var newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    }

    var customer = new Customer(newCustomer);
    customer.save().then(()=>{
        res.send("New Custoemer Created")
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
    
})

// A customer will have:
// 1. Name
// 2. Age
// 3. Address

app.listen("5555", ()=>{
    console.log("Server is running on port 5555 - Customer's Service");
})