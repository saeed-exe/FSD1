/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose = require("mongoose");
/* to validate connection with mongoose */
const validator = require("validator");

const productschema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    price :{
        type:String,
        required:true
    }
    
})

productschema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Product = mongoose.model('Product',productschema);

module.exports = Product;