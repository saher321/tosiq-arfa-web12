import express from 'express'
import { createNotes, deleteNotes, detailNote, getAllNotes, updateNote } from '../controllers/notesController.js';

const notesRoute = express.Router();

notesRoute.get('/notes', getAllNotes)
notesRoute.post('/notes/create', createNotes)
notesRoute.get('/notes/:id', detailNote)
notesRoute.delete('/notes/delete/:id', deleteNotes)
notesRoute.patch('/notes/update/:id', updateNote)

export default notesRoute;