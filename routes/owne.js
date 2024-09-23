const express = require('express');
const router = express.Router();
const owner = require('../controllers/owne');

router.get('/owner', owner.getAllOwners);
router.post('/owner', owner.createOwner);
router.put('/owner/:id', owner.updateOwner);
router.delete('/owners/:id', owner.deleteOwner);

module.exports = router;