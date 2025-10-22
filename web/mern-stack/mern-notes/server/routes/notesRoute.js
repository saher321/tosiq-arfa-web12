import express from 'express'
import { createNotes, deleteNotes, detailNote, getAllNotes } from '../controllers/notesController.js';

const notesRoute = express.Router();

notesRoute.get('/notes', getAllNotes)
notesRoute.post('/notes/create', createNotes)
notesRoute.get('/notes/:id', detailNote)
notesRoute.delete('/notes/delete/:id', deleteNotes)

export default notesRoute;