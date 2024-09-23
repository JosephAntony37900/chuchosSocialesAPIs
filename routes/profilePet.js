const express = require('express');
const router = express.Router();
const profilePet = require('../controllers/profilePet');

router.get('/profiles', profilePet.getAllProfilePets),
router.post('/profiles', profilePet.createProfilePet);
router.put('/profile/:id', profilePet.updateProfilePet);
router.delete('/profiles/:id', profilePet.deleteProfilePet);

module.exports = router;