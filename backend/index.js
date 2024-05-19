const port = 4000;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Database Connection With MongoDb
mongoose.connect("mongodb+srv://chelsyyadav22:4jlR1aWF0XUqkZgD@ecommerce-db.iroi3zu.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-db")
    .then((data) => {
        console.log(`Connected to database successfully with ${data.connection.host}`);
    })
    .catch((error) => {
        console.log(error);
    });

//API creation
app.get("/", (req, res) => {
    res.send("Express app is running");
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port 4000");
    } else {
        console.log("Error: " + error);
    }
});

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Schema for Creating Products
const Product = mongoose.model("product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: { // Fixed typo in property name
        type: Boolean,
        default: true,
    },
});

// Route to add a product
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log('Saved');
    res.json({
        success: true,
        name: req.body.name,
    });
});

// creating api for deleting products
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// creating api for getting all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})


// Creating an upload endpoint for images
const upload = multer({ storage: storage });

app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// app.listen(port,(error)=>{
//     if(!error){
//          console.log("Server Running on Port"+port)
//     }
// })