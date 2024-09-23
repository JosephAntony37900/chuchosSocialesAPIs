const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts');

router.get('/posts', posts.getAllPosts);
router.post('/posts', posts.createPost);
router.put('/post/:id', posts.updatePost);
router.delete('/posts/:id' , posts.deletePost);

module.exports = router;