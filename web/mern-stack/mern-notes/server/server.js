import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import notesRoute from './routes/notesRoute.js';

dotenv.config();
const app       = express();
app.use(express.json());

const PORT      = process.env.PORT || 5000;
const PREFIX    = '/api/v1';


app.get('/', (req, res) => {
    res.send("Hello from server")
});

app.use(PREFIX, notesRoute)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`)
})