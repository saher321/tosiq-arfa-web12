import express from 'express'
import { createNotes, deleteNotes, detailNote, getAllNotes, updateNote } from '../controllers/notesController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const notesRoute = express.Router();

notesRoute.get('/notes', authMiddleware, getAllNotes)

notesRoute.post('/notes/create', authMiddleware, createNotes)
notesRoute.get('/notes/:id', authMiddleware, detailNote)
notesRoute.delete('/notes/delete/:id', authMiddleware, deleteNotes)
notesRoute.patch('/notes/update/:id', authMiddleware, updateNote)

export default notesRoute;