import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Note from './models/notesModel.js';

dotenv.config();

const app = express();
const PORT= process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello from server")
});

app.get('/notes', async (req, res) => {
    const notes = await Note.find({});
    return res.send({status: true, notes})
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`)
})