const routes = require('express').Router();
const comments = require('./../comments');
const posts = require('./../posts');


routes.get('/posts', posts.getPosts);
routes.post('/posts', posts.addPost);
routes.put('/posts/:postId', posts.updatePost);
routes.delete('/posts/:postId', posts.removePost);

routes.get('/posts/:postId/comments', comments.getComments);
routes.post('/posts/:postId/comments', comments.addComment);
routes.put('/posts/:postId/comments/:commentId', comments.updateComment);
routes.delete('/posts/:postId/comments/:commentId', comments.removeComment);


module.exports = routes;
