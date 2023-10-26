require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
    try{
        mongoose.connect(process.env.MONGOURI);
        console.log("connection successful");
    } catch(error){
        console.log(error);
    }
}
connection();