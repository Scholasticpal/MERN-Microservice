const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

app.use(bodyParser.json())

//Connect to database
mongoose
.connect("mongodb+srv://user333:abcdefg@ordersservice.ipidm5i.mongodb.net/?retryWrites=true&w=majority")
.then((db) => console.log("OrdersService db is connected"))
.catch((err)=> console.log(err));

require("./Order")
const Order = mongoose.model("Order");

//Create a new order
app.post("/order", (req, res)=>{
    var newOrder = {
        CustomerID: new mongoose.Types.ObjectId(req.body.CustomerID),
        BookID: new mongoose.Types.ObjectId(req.body.BookID),
        InitialDate: req.body.InitialDate,
        DeliveryDate: req.body.DeliveryDate
    }

    var order = new Order(newOrder);
    order.save().then(()=>{
        res.send("New Order created Successfully")
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })

})

app.get("/orders", (req, res)=>{

    Order.find().then((books)=>{
        res.json(books)
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
})

// List all the functionalities of order
app.listen("6565", ()=>{
    console.log("Service is running on port 6565 - Orders's Service")
})