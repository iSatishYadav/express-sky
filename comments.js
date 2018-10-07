let store = require('./data');
module.exports = {
  getComments(req, res) {
    let postId = req.params.postId;
    res.send(store.posts.filter(x => x.id == postId).map(x => x.comments));
  },
  addComment(req, res) {
    let postId = req.params.postId;
    let comment = req.body;
    let postIndex = store.posts.findIndex(x => x.id == postId);
    let post = store.posts[postIndex];
    comment.id = post.comments.length + 1;
    store.posts[postIndex].comments.push(comment);
    res.send(comment);
  },
  updateComment(req, res) {
    let postId = req.params.postId;
    let comment = req.body;
    let postIndex = store.posts.findIndex(x => x.id == postId);
    let post = store.posts[postIndex];
    comment.id = req.params.commentId;
    let commentIndex = store.posts[postIndex].comments.findIndex(x=> x.id == comment.id);
    store.posts[postIndex].comments[commentIndex] = comment;
    res.send(comment);
  },
  removeComment(req, res) {
    let postId = req.params.postId;    
    let postIndex = store.posts.findIndex(x => x.id == postId);
   
    let commentId = req.params.commentId;
    let commentIndex = store.posts[postIndex].comments.findIndex(x=> x.id == commentId);
    store.posts[postIndex].comments.splice(commentIndex, 1);
    res.status(201).json({"msg" : "comment deleted"});
  }
}