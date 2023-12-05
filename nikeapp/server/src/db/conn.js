/* eslint-disable no-undef */
const mongoose = require("mongoose");

mongoose.connect("pasteyourmongoatlaslinkhere",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Conn Successfull");
}).catch((e)=>{
    console.log(`Connection Err ${e}`);
})
