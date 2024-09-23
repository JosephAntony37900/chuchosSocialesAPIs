const express = require('express');
const router = express.Router();
const comments = require('../controllers/comments');

router.get('/comments', comments.getAllComments)
router.post('/comments', comments.createComment)
router.put('/comment/:id', comments.updateComment)
router.delete('/comments/:id', comments.deleteComment)

module.exports = router;