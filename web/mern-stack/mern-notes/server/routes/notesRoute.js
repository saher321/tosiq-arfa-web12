import express from 'express'
import { createNotes, getAllNotes } from '../controllers/notesController.js';

const notesRoute = express.Router();

notesRoute.get('/notes', getAllNotes)
notesRoute.post('/notes/create', createNotes)

export default notesRoute;