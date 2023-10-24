require("./db/connection");
const express = require("express");
const cors = require("cors");
const postRouter = require("./posts/postRoutes");

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
// app.use(postRouter);

app.get("/health", (req, res) => {
    res.status(200).send({message: "APi is working"});
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})