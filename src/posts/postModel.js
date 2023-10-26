const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        unique: true
    },
    body:{
        type: String,
        require: true
    },
    tags:{
        type: Array
    }
})
const Post = mongoose.model("post", postSchema);
module.exports = Post;