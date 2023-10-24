require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
    try{
        mongoose.connect(procecss.env.MONGOURI);
        console.log("connection successful");
    } catch(error){
        console.log(error);
    }
}