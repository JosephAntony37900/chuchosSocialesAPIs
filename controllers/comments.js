const { Comment } = require('../models');

// Crear un comentario
const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los comentarios
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un comentario por ID
const getCommentById = async (req, res) => {
  try {
    const Comment = await Comment.findByPk(req.params.id);
    if (Comment) {
      res.status(200).json(Comment);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un comentario
const updateComment = async (req, res) => {
  try {
    const [updated] = await Comment.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedComment = await Comment.findByPk(req.params.id);
      res.status(200).json(updatedComment);
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un comentario
const deleteComment = async (req, res) => {
  try {
    const deleted = await Comment.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
};
