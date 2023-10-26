const {Router} = require("express");
const {createPost, readPosts, updatePost, deletePost} = require("./postControllers");

const postRouter = Router();

postRouter.post("/createPost", createPost);
postRouter.post("/readPost", readPosts);
postRouter.put("/updatePost", updatePost);
postRouter.delete("/deletePost", deletePost);

module.exports = postRouter;