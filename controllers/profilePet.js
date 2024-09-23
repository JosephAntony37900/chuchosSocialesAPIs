const { ProfilePet } = require('../models');

// Crear un comentario
const createProfilePet = async (req, res) => {
  try {
    const profilePet = await ProfilePet.create(req.body);
    res.status(201).json(profilePet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los comentarios
const getAllProfilePets = async (req, res) => {
  try {
    const profilePets = await ProfilePet.findAll();
    res.status(200).json(profilePets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un comentario por ID
const getProfilePetById = async (req, res) => {
  try {
    const ProfilePet = await ProfilePet.findByPk(req.params.id);
    if (ProfilePet) {
      res.status(200).json(ProfilePet);
    } else {
      res.status(404).json({ error: 'ProfilePet not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un comentario
const updateProfilePet = async (req, res) => {
  try {
    const [updated] = await ProfilePet.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedProfilePet = await ProfilePet.findByPk(req.params.id);
      res.status(200).json(updatedProfilePet);
    } else {
      res.status(404).json({ error: 'ProfilePet not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un comentario
const deleteProfilePet = async (req, res) => {
  try {
    const deleted = await ProfilePet.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'ProfilePet not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProfilePet,
  getAllProfilePets,
  getProfilePetById,
  updateProfilePet,
  deleteProfilePet
};
