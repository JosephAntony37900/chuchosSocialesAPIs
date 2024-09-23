const express = require('express');
const router = express.Router();
const messages = require('../controllers/messages');

router.get('/message', messages.getAllMessages);
router.post('/message', messages.createMessage);
router.put('/messages/:id', messages.updateMessage);
router.delete('/message/:id', messages.deleteMessage);

module.exports = router;