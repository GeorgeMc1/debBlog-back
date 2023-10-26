const Post = require("./postModel");

exports.createPost = async (req, res) => {
    try {
        console.log(req.body);
        let post = await Post.create(req.body);
        res.status(201).send({
            success: true,
            message: `Post with title ${req.body.title} has been successfully created`,
            post: post
        });
    } catch(error) {
        console.log(error);
        res.status(400).send({success: false, error: error.message});
    }
}

exports.readPosts = async (req, res) => {
    try {
        const posts = await Post.find(req.body);
        res.status(200).send({
            success: true,
            posts: posts
        });
    } catch(error) {
        console.log(error);
        res.status(500).send({success: false, error: error.message});
    }
}

exports.updatePost = async (req, res) => {
    try {
        const filter = { title: req.body.title };
        const update = { [req.body.key]: req.body.value };
        let updatedPost = await Post.findOneAndUpdate(filter, update,
            { new: true } //returns updated value
        );
        console.log(updatedPost);
        res.status(200).send({
            success: true,
            message: `the ${req.body.key} has been updated to ${req.body.value}`,
            key: req.body.key,
            value: req.body.value
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({ success: true, error: error.message });
    }
}

exports.deletePost = async (req, res) => {
    try {
        await Post.deleteOne({title: req.body.title});
        res.status(202).send({
            success: true,
            message: `${req.body.title} has been deleted`
        });
    } catch(error) {
        console.log(error);
        res.status(500).send({success: false, error: error.message});
    }
}