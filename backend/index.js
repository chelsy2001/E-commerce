const port = 4000;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const packageName = require('path');
const cors =require('cors');

app.use(express.json());
app.use(cors());

// Database Connection With MongoDb
// mongoose.connect("mongodb+srv://chelsyyadav22:4jlR1aWF0XUqkZgD@ecommerce-db.iroi3zu.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-db")
mongoose.connect("mongodb+srv://chelsyyadav22:4jlR1aWF0XUqkZgD@ecommerce-db.iroi3zu.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-db").then((data)=>{
    console.log(`Connected to database succesfully with ${data.connection.host}`);
}).catch((error)=>{
    console.log(error);
})

//API creation
app.get("/",(req,res)=>{
    res.send("expres app is running")
}) 
app.listen(port,(error)=>{
    if(!error){
        console.log("server running of port 4000")
    }
    else
    {
        console.log("error : " +error)
    }
})