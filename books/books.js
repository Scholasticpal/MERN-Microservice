//Load express
    const express = require("express")//import express
    const app = express(); //create express app instance


app.get('/', (req, res) => { //Main route of books application
    res.send("This is our main endpoint");
});

//open express server
app.listen(4545, () => {
    console.log("Server is up and running on port 4545");
});