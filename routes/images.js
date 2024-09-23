const express = require('express');
const router = express.Router();
const images = require('../controllers/images');

router.get('/images', images.getAllImages);
router.post('/images', images.createImage);
router.put('/image/:id', images.updateImage);
router.delete('/images/:id', images.deleteImage);

module.exports = router;