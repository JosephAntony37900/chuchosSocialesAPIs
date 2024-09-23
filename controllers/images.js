const { Image } = require('../models');

// Crear un comentario
const createImage = async (req, res) => {
  try {
    const image = await Image.create(req.body);
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los comentarios
const getAllImages = async (req, res) => {
  try {
    const images = await Image.findAll();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un comentario por ID
const getImageById = async (req, res) => {
  try {
    const Image = await Image.findByPk(req.params.id);
    if (Image) {
      res.status(200).json(Image);
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un comentario
const updateImage = async (req, res) => {
  try {
    const [updated] = await Image.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedImage = await Image.findByPk(req.params.id);
      res.status(200).json(updatedImage);
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un comentario
const deleteImage = async (req, res) => {
  try {
    const deleted = await Image.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createImage,
  getAllImages,
  getImageById,
  updateImage,
  deleteImage
};
