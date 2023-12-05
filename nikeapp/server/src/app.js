/* eslint-disable no-undef */
const express = require("express");
const Product =  require("./models/Products");
require("./db/conn");
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello welcome");
})


app.post("/Products",(req,res)=>{
    //console.log(req.body);
    const body = req.body
    const product = {
        "name": body.name,
        "price": body.price,
    }
    const new_product = new Product(product);
    new_product.save().then(result=>{
        res.status(201).json(result);
    }).catch((e)=>{
        res.status(400).json(e);
    })
})

app.get("/Products", async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});



app.listen(port, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Server is running at http://localhost:${port}`);
    }
});