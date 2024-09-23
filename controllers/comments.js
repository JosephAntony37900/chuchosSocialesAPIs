const { Comment } = require('../models');

// Crear un avión
const createPlane = async (req, res) => {
  try {
    const plane = await Plane.create(req.body);
    res.status(201).json(plane);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los aviones
const getAllPlanes = async (req, res) => {
  try {
    const planes = await Plane.findAll();
    res.status(200).json(planes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un avión por ID
const getPlaneById = async (req, res) => {
  try {
    const plane = await Plane.findByPk(req.params.id);
    if (plane) {
      res.status(200).json(plane);
    } else {
      res.status(404).json({ error: 'Plane not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un avión
const updatePlane = async (req, res) => {
  try {
    const [updated] = await Plane.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPlane = await Plane.findByPk(req.params.id);
      res.status(200).json(updatedPlane);
    } else {
      res.status(404).json({ error: 'Plane not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un avión
const deletePlane = async (req, res) => {
  try {
    const deleted = await Plane.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Plane not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPlane,
  getAllPlanes,
  getPlaneById,
  updatePlane,
  deletePlane
};
