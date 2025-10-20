import express from 'express'
import { createNotes, deleteNotes, getAllNotes } from '../controllers/notesController.js';

const notesRoute = express.Router();

notesRoute.get('/notes', getAllNotes)
notesRoute.post('/notes/create', createNotes)
notesRoute.delete('/notes/delete/:id', deleteNotes)

export default notesRoute;