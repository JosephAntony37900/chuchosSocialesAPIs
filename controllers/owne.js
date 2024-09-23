const { Owner } = require('../models');

// Crear un comentario
const createOwner = async (req, res) => {
  try {
    const owner = await Owner.create(req.body);
    res.status(201).json(owner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los comentarios
const getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.findAll();
    res.status(200).json(owners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un comentario por ID
const getOwnerById = async (req, res) => {
  try {
    const owner = await Owner.findByPk(req.params.id);
    if (owner) {
      res.status(200).json(owner);
    } else {
      res.status(404).json({ error: 'Owner not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un comentario
const updateOwner = async (req, res) => {
  try {
    const [updated] = await Owner.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedOwner = await Owner.findByPk(req.params.id);
      res.status(200).json(updatedOwner);
    } else {
      res.status(404).json({ error: 'Owner not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un comentario
const deleteOwner = async (req, res) => {
  try {
    const deleted = await Owner.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Owner not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOwner,
  getAllOwners,
  getOwnerById,
  updateOwner,
  deleteOwner
};
