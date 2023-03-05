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

//List all customers
app.get("/customers", (req, res)=>{
    Customer.find().then((customers)=>{
        res.json(customers)
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
});

//List a single Customer by its id
app.get("/customer/:id", (req, res)=>{
    Customer.findById(req.params.id).then((customer)=>{
        if(customer){
            res.json(customer)
        }
        else{
            res.send("Invalid Id Entered")
        }
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
})

app.listen("5555", ()=>{
    console.log("Server is running on port 5555 - Customer's Service");
})