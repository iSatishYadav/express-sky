let store = require('./data')
module.exports = {
    getPosts(req, res) {
        res.send(store.posts);
    },
    addPost(req, res) {
        let post = req.body;
        post.id = store.posts.length + 1;
        store.posts.push(post);
        res.send(post);
    },
    updatePost(req, res) {
        let post = req.body;
        let postId = req.params.postId;
        post.id = postId;
        store.posts[store.posts.findIndex(x => x.id == postId)] = post;
        res.send(post);
    },
    removePost(req, res) {
        let postId = req.params.postId;
        store.posts.splice(store.posts.findIndex(x => x.id == postId), 1);
        res.status(201).json({"msg" : "deleted"});
    }
}